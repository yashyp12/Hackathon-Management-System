"use client";  // Marks the component as a Client Component

import { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase"; // Correctly import Firestore and Auth
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [participatedHackathons, setParticipatedHackathons] = useState([]);
  const [upcomingHackathons, setUpcomingHackathons] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchParticipatedHackathons(currentUser.uid);
        fetchUpcomingHackathons();
      } else {
        router.push("/auth/signin");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const fetchParticipatedHackathons = async (userId) => {
    try {
      const q = query(
        collection(db, "hackathons"),
        where("participants", "array-contains", userId)
      );
      const querySnapshot = await getDocs(q);
      const hackathons = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setParticipatedHackathons(hackathons);
    } catch (error) {
      console.error("Error fetching participated hackathons:", error);
    }
  };

  const fetchUpcomingHackathons = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "hackathons"));
      const hackathons = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((hackathon) => new Date(hackathon.date) > new Date());
      setUpcomingHackathons(hackathons);
    } catch (error) {
      console.error("Error fetching upcoming hackathons:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Your Participated Hackathons</h2>
        {participatedHackathons.length > 0 ? (
          <ul className="list-disc pl-6">
            {participatedHackathons.map((hackathon) => (
              <li key={hackathon.id} className="mb-2">
                {hackathon.name} - {new Date(hackathon.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not participated in any hackathons yet.</p>
        )}
      </section>
      <section>
        <h2 className="text-xl font-semibold">Upcoming Hackathons</h2>
        {upcomingHackathons.length > 0 ? (
          <ul className="list-disc pl-6">
            {upcomingHackathons.map((hackathon) => (
              <li key={hackathon.id} className="mb-2">
                {hackathon.name} - {new Date(hackathon.date).toLocaleDateString()}
                <button
                  className="ml-4 px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => registerForHackathon(hackathon.id)}
                >
                  Register
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming hackathons at the moment.</p>
        )}
      </section>
    </div>
  );
}

const registerForHackathon = async (hackathonId) => {
  try {
    // Update Firestore with the user's participation
    console.log("Registering for hackathon:", hackathonId);
  } catch (error) {
    console.error("Error registering for hackathon:", error);
  }
};
