// components/Navbar.js

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Hackathon App</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
          {/* <Link href="/about" className="text-white">About</Link> */}
          <Link href="/dashboard" className="text-white">Dashboard</Link>
          <Link href="/auth/signin" className="text-white">Sign In</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  );
}
