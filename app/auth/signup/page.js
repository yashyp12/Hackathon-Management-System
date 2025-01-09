"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignUp() {
  const handleGitHubSignUp = async () => {
    await signIn("github");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Your Account</h2>
        <button
          onClick={handleGitHubSignUp}
          className="w-full bg-blue-500 text-white py-3 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
        >
          Sign Up with GitHub
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
