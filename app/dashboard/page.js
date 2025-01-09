"use client";  // This marks the component as a Client Component

import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";  // Correct path to firebase.js
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);  // Set the user when authenticated
      } else {
        router.push("/auth/signin");  // Redirect to sign-in if not authenticated
      }
    });

    return () => unsubscribe();  // Clean up the listener on unmount
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;  // Optionally show a loading screen while checking authentication
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.displayName || user.email}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: Track ongoing and past hackathons */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Hackathons</h2>
          <p>Track ongoing and past hackathons.</p>
          <Link href="/hackathons" className="text-blue-500 font-semibold">View Hackathons</Link>
        </div>

        {/* Card 2: Manage personal profile */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p>Manage your personal information and settings.</p>
          <Link href="/profile" className="text-blue-500 font-semibold">Edit Profile</Link>
        </div>

        {/* Card 3: View events */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">My Events</h2>
          <p>View events you have created or participated in.</p>
          <Link href="/events" className="text-blue-500 font-semibold">View My Events</Link>
        </div>
      </div>
    </div>
  );
}
