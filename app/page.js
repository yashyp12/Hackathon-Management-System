"use client";
import { useState } from "react";

export default function Home() {
  // Demo data for upcoming hackathons
  const hackathonsData = [
    {
      id: "1",
      name: "Hackathon 2025",
      date: "2025-02-15",
      description: "Join the ultimate hackathon and showcase your skills!",
    },
    {
      id: "2",
      name: "Tech Fest 2025",
      date: "2025-03-10",
      description: "Explore new technologies and innovate at Tech Fest.",
    },
    {
      id: "3",
      name: "AI Innovation Hackathon",
      date: "2025-04-05",
      description: "Build AI-driven solutions to real-world problems.",
    },
  ];

  // State to track participated hackathons
  const [participatedHackathons, setParticipatedHackathons] = useState([]);

  // Handle participation
  const handleParticipate = (hackathon) => {
    if (!participatedHackathons.some((h) => h.id === hackathon.id)) {
      setParticipatedHackathons([...participatedHackathons, hackathon]);
      alert(`${hackathon.name} added to your dashboard!`);
    }
  };

  // Handle removal
  const handleRemove = (hackathon) => {
    setParticipatedHackathons(
      participatedHackathons.filter((h) => h.id !== hackathon.id)
    );
    alert(`${hackathon.name} removed from your dashboard.`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <header className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Hackathon Management App</h1>
        <p className="text-xl mb-6">Manage hackathons, events, and participants efficiently.</p>
        <button
          className="bg-white text-blue-500 py-3 px-8 rounded-full text-xl hover:bg-blue-100 transition duration-300"
          onClick={() => alert("Redirect to Sign In or Dashboard")}
        >
          Get Started
        </button>
      </header>

      <section className="mt-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Hackathons</h2>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonsData.map((hackathon) => (
            <div
              key={hackathon.id}
              className="relative flex flex-col w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"></div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {hackathon.name}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {hackathon.description}
                </p>
                <p className="mt-2 text-sm text-gray-500">Date: {hackathon.date}</p>
              </div>
              <div className="p-6 pt-0 flex gap-4">
                <button
                  onClick={() => handleParticipate(hackathon)}
                  className="select-none rounded-lg bg-green-500 py-2 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85]"
                >
                  Participate
                </button>
                <button
                  onClick={() => handleRemove(hackathon)}
                  className="select-none rounded-lg bg-red-500 py-2 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Your Participated Hackathons</h2>
        {participatedHackathons.length > 0 ? (
          <ul className="list-disc pl-6 text-left text-white">
            {participatedHackathons.map((hackathon) => (
              <li key={hackathon.id} className="mb-2">
                {hackathon.name} - {hackathon.date}
              </li>
            ))}
          </ul>
        ) : (
          <p>No participated hackathons yet.</p>
        )}
      </section>
    </div>
  );
}
