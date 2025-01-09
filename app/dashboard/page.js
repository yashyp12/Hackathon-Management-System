"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [participatedHackathons, setParticipatedHackathons] = useState([]);

  useEffect(() => {
    const storedHackathons = JSON.parse(localStorage.getItem("participatedHackathons")) || [];
    setParticipatedHackathons(storedHackathons);
  }, []);

  const removeParticipation = (hackathonId) => {
    const updatedHackathons = participatedHackathons.filter((hackathon) => hackathon.id !== hackathonId);
    setParticipatedHackathons(updatedHackathons);
    localStorage.setItem("participatedHackathons", JSON.stringify(updatedHackathons));
    alert("You have been removed from the hackathon.");
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <section>
        <h2 className="text-xl font-semibold mb-4">Your Participated Hackathons</h2>
        {participatedHackathons.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participatedHackathons.map((hackathon) => (
              <li key={hackathon.id} className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold">{hackathon.name}</h3>
                <p className="text-sm text-gray-600">{hackathon.description}</p>
                <p className="text-sm text-gray-500 mt-2">Date: {hackathon.date}</p>
                <button
                  onClick={() => removeParticipation(hackathon.id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not participated in any hackathons yet.</p>
        )}
      </section>
    </div>
  );
}
