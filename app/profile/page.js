"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase"; // Correct path to firebase.js
import { updateProfile } from "firebase/auth";

export default function Profile() {
  const [userName, setUserName] = useState(auth.currentUser?.displayName || "");
  const [email, setEmail] = useState(auth.currentUser?.email || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      if (userName) {
        await updateProfile(auth.currentUser, { displayName: userName });
        setSuccess("Profile updated successfully!");
      } else {
        setError("Please enter a name.");
      }
    } catch (error) {
      setError("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              readOnly
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          <div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
