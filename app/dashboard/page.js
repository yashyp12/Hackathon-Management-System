// app/dashboard/page.js
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
