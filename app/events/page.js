"use client";

import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";  // Correct path to firebase.js
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth } from "../../lib/firebase"; // Firebase auth to check if user is logged in

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const q = query(
          collection(db, "userParticipations"),
          where("userId", "==", auth.currentUser?.uid)
        );
        const querySnapshot = await getDocs(q);
        const eventIds = querySnapshot.docs.map((doc) => doc.data().hackathonId);

        // Fetch event details based on eventIds
        const eventsData = await Promise.all(
          eventIds.map(async (eventId) => {
            const eventRef = collection(db, "hackathons");
            const eventSnapshot = await getDocs(query(eventRef, where("id", "==", eventId)));
            return eventSnapshot.docs.map((doc) => doc.data());
          })
        );
        setEvents(eventsData.flat());
      } catch (error) {
        console.error("Error fetching user events: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (auth.currentUser) {
      fetchUserEvents();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Events</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2">{event.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
