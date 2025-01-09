"use client";  // This marks the component as a Client Component

import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";  // Correct path to firebase.js
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { db } from "../../lib/firebase";  // Firebase Firestore
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userHackathons, setUserHackathons] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);  // Set the user when authenticated
        fetchUserHackathons(currentUser.uid);
      } else {
        router.push("/auth/signin");  // Redirect to sign-in if not authenticated
      }
    });

    return () => unsubscribe();  // Clean up the listener on unmount
  }, [router]);

  const fetchUserHackathons = async (userId) => {
    try {
      const q = query(
        collection(db, "userParticipations"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);
      const eventIds = querySnapshot.docs.map((doc) => doc.data().hackathonId);

      const eventsData = await Promise.all(
        eventIds.map(async (eventId) => {
          const eventRef = collection(db, "hackathons");
          const eventSnapshot = await getDocs(query(eventRef, where("id", "==", eventId)));
          return eventSnapshot.docs.map((doc) => doc.data());
        })
      );
      setUserHackathons(eventsData.flat());
    } catch (error) {
      console.error("Error fetching user hackathons: ", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;  // Optionally show a loading screen while checking authentication
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName || user.email}</h1>
      <h2 className="text-xl font-semibold mb-4">Your Participated Hackathons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userHackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold">{hackathon.name}</h3>
            <p className="text-gray-600">{hackathon.date}</p>
            <p className="mt-2">{hackathon.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
