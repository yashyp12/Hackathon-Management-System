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
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Manage Events</h3>
            <p className="text-gray-700">Track hackathon events and deadlines effortlessly.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Participants</h3>
            <p className="text-gray-700">Easily manage registered participants.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Analytics</h3>
            <p className="text-gray-700">Get insights into event statistics and engagement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
