"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <header className="text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Hackathon Management App</h1>
        <p className="text-xl mb-6">Manage hackathons, events, and participants efficiently.</p>
        <Link
          href="/auth/signin"
          className="bg-white text-blue-500 py-3 px-8 rounded-full text-xl hover:bg-blue-100 transition duration-300"
        >
          Get Started
        </Link>
      </header>

      <section className="mt-16 text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Hackathon</h2>




        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tailwind Card */}
          <div className="relative flex flex-col w-full rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tailwind Card
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>
          {/* Add additional cards below if needed */}
        </div>
      </section>
    </div>
  );
}
