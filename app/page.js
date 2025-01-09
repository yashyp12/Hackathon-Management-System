"use client";
import Link from "next/link";


export default function Home() {
  // Sample data for hackathons
  const hackathons = [
    {
      id: 1,
      name: "CodeFest 2025",
      location: "Jalgaon",
      prize: "$50,000",
      date: "2025-04-10",
      image: "https://media.licdn.com/dms/image/v2/D5612AQE-MyT6EjJ3VA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707483130571?e=2147483647&v=beta&t=akOzQLvcyfiiyyOhPBiUdp3Ol1cuoNCizpCjX8z4r4M",
    },
    {
      id: 2,
      name: "DevHack",
      location: "Online",
      prize: "$20,000",
      date: "2025-03-15",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoR8bzppiYo9rIHOaSkENUMfX0qD6fefoskA&s",
    },
    {
      id: 3,
      name: "InnovateX",
      location: "Mumbai",
      prize: "€30,000",
      date: "2025-06-01",
      image: "https://www.kreativdistrikt.com/wp-content/uploads/2024/02/The-Art-of-Successful-Hackathon-Management.webp",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      {/* Header Section */}
      <header className="text-center text-white">

        <br /><br /><br /><br />
        <h1 className="text-5xl font-extrabold mb-4">Explore the upcoming hackathons</h1>
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

      {/* Hackathons Section */}
      <section className="mt-16 text-center text-white">
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

      {/* Hero Section */}
      <section className="mt-16 bg-white py-16 w-full text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Why Participate in Hackathons?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Hackathons are a great way to showcase your skills, network with industry
            professionals, and win exciting prizes. Whether you're a beginner or a pro,
            there's something for everyone!
          </p>
          <Link
            href="/hackathons"
            className="inline-block bg-indigo-500 text-white py-3 px-8 rounded-lg shadow hover:bg-indigo-600 transition"
          >
            Explore More
          </Link>
        </div>
      </section>
     </div>
  );
}
