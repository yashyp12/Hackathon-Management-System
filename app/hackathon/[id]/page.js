"use client";

import { useEffect, useState } from "react";

export default function HackathonDetail({ params }) {
  const { id } = params;
  const [hackathon, setHackathon] = useState(null); // State to hold hackathon details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Simulate fetching hackathon details by ID
    const fetchHackathonDetails = async () => {
      try {
        // Mock API response
        const mockData = [
          {
            id: "1",
            name: "CodeFest 2025",
            description: "A hackathon focused on AI and machine learning projects.",
            date: "2025-02-15",
            location: "Jalgaon",
            participants: 120,
          },
          {
            id: "2",
            name: "DevHack",
            description: "A hackathon to build innovative web applications.",
            date: "2025-03-01",
            location: "Mumbai",
            participants: 200,

            
          },
          {
            id: "3",
            name: "InnovateX",
            description: "A hackathon to build innovative web applications.",
            date: "2025-03-01",
            location: "Pune",
            participants: 200,

            
          },
        ];

        const hackathonDetails = mockData.find((item) => item.id === id);

        if (hackathonDetails) {
          setHackathon(hackathonDetails);
        } else {
          throw new Error("Hackathon not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathonDetails();
  }, [id]);

  if (loading) {
    return <p>Loading hackathon details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{hackathon.name}</h1>
      <p className="mb-2">{hackathon.description}</p>
      <p><strong>Date:</strong> {hackathon.date}</p>
      <p><strong>Location:</strong> {hackathon.location}</p>
      <p><strong>Participants:</strong> {hackathon.participants}</p>
      
    </div>
  );
}
