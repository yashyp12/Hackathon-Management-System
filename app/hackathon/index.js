"use client";

import { useState, useEffect } from "react";

export default function Hackathons() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    // Fetch hackathons from database
    const mockHackathons = [
      { id: 1, name: "Hackathon A", date: "2024-12-10", location: "Online", type: "Upcoming" },
      { id: 2, name: "Hackathon B", date: "2024-11-15", location: "NYC", type: "Past" },
    ];
    setHackathons(mockHackathons);
  }, []);

  const upcomingHackathons = hackathons.filter((h) => h.type === "Upcoming");
  const pastHackathons = hackathons.filter((h) => h.type === "Past");

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hackathons</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Upcoming Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{hackathon.name}</h3>
              <p>Date: {hackathon.date}</p>
              <p>Location: {hackathon.location}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Past Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastHackathons.map((hackathon) => (
            <div key={hackathon.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{hackathon.name}</h3>
              <p>Date: {hackathon.date}</p>
              <p>Location: {hackathon.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
