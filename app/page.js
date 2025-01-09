"use client";
import Link from "next/link";

export default function Home() {
  // Sample data for hackathons
  const hackathons = [
    {
      id: 1,
      name: "CodeFest 2025",
      location: "Pune",
      prize: "$50,000",
      date: "2025-04-10",
      image: "https://via.placeholder.com/400x200?text=Hackathon+1",
    },
    {
      id: 2,
      name: "DevHack",
      location: "Online",
      prize: "$20,000",
      date: "2025-03-15",
      image: "https://via.placeholder.com/400x200?text=Hackathon+2",
    },
    {
      id: 3,
      name: "InnovateX",
      location: "Mharashtra Mumbai",
      prize: "€30,000",
      date: "2025-06-01",
      image: "https://via.placeholder.com/400x200?text=Hackathon+3",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <header className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Hackathon Management App</h1>
        <p className="text-xl mb-6">
          Manage hackathons, events, and participants efficiently.
        </p>
        <Link
          href="/auth/signin"
          className="bg-white text-blue-500 py-3 px-8 rounded-full text-xl hover:bg-blue-100 transition duration-300"
        >
          Get Started
        </Link>
      </header>

      <section className="mt-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Hackathons</h2>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="relative flex flex-col w-full rounded-lg bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={hackathon.image}
                alt={hackathon.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{hackathon.name}</h3>
                <p className="text-gray-600">📍 {hackathon.location}</p>
                <p className="text-gray-600">🏆 Prize: {hackathon.prize}</p>
                <p className="text-gray-600">📅 Date: {hackathon.date}</p>
                <div className="mt-4">
                  <Link
                    href={`/hackathon/${hackathon.id}`}
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
