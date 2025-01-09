"use client";  // This marks the component as a Client Component

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // For navigation within Next.js

export default function Dashboard() {
  const { data: session, status } = useSession();  // Getting session data
  const router = useRouter();

  // If the session is still loading, we don't want to render anything yet
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If there is no session, redirect to the login page
  if (!session) {
    router.push("/auth/signin");
    return null; // Return null to prevent rendering the page
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <p>Manage upcoming hackathon events and deadlines.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Participants</h2>
          <p>View and manage registered participants.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <p>See event statistics and participant engagement.</p>
        </div>
      </div>
    </div>
  );
}
