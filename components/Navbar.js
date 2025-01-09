import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Hackathon App</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/dashboard" className="text-white">Dashboard</Link>
          <Link href="/auth/signin" className="text-white">Sign In</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">Menu</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white">Home</Link>
          <Link href="/dashboard" className="block text-white">Dashboard</Link>
          <Link href="/auth/signin" className="block text-white">Sign In</Link>
        </div>
      )}
    </nav>
  );
}
