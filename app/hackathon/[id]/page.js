export default function HackathonDetail({ params }) {
  const { id } = params;

  // Fetch hackathon details by ID (mock data for now)
  const hackathon = {
 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{hackathon.name}</h1>
      <p className="mb-2">{hackathon.description}</p>
      <p>Date: {hackathon.date}</p>
      <p>Location: {hackathon.location}</p>
      <p>Participants: {hackathon.participants}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">Register</button>
    </div>
  );
}
