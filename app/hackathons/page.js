"use client";

import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";  // Correct path to firebase.js
import { collection, getDocs } from "firebase/firestore";
import { auth } from "../../lib/firebase"; // Firebase auth to check if user is logged in
import { useRouter } from "next/navigation";

export default function Hackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "hackathons"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setHackathons(data);
      } catch (error) {
        console.error("Error fetching hackathons: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  const handleJoinHackathon = (hackathonId) => {
    if (!auth.currentUser) {
      router.push("/auth/signin");  // Redirect to sign-in if user is not authenticated
    } else {
      // Save user participation in Firestore (assuming there's a collection for user participations)
      const userRef = collection(db, "userParticipations");
      addDoc(userRef, {
        userId: auth.currentUser.uid,
        hackathonId,
      }).then(() => {
        alert("You have successfully joined the hackathon!");
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Explore Hackathons</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h2 className="text-xl font-semibold">{hackathon.name}</h2>
              <p className="text-gray-600">{hackathon.date}</p>
              <p className="mt-2">{hackathon.status}</p>
              <button
                onClick={() => handleJoinHackathon(hackathon.id)}
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Join Hackathon
              </button>
            </div>
          ))}
        </div>
      )}


      
    </div>
  );
}
