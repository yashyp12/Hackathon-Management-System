"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Log */}
          <div className="flex-shrink-0 text-white font-bold text-3xl">
            Hackathon App
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-white hover:bg-orange-700 px-3 py-2 rounded-md textmedium font-semibold"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-white hover:bg-orange-700 px-3 py-2 rounded-md text-medium font-semibold"
            >
              Dashboard
            </Link>
            <Link
              href="/auth/signup"
              className="text-white hover:bg-orange-700 px-3 py-2 rounded-md text-medium font-semibold"
            >
              Register
            </Link>
            <Link
              href="/auth/signin"
              className="text-white hover:bg-orange-700 px-3 py-2 rounded-md text-medium font-semibold"
            >
              Sign In
            </Link>
            <Link
              href="/profile"
              className="text-white hover:bg-orange-700 px-3 py-2 rounded-md text-medium font-semibold"
            >
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:bg-purple-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/auth/signup"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/auth/signin"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/profile"
              className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
