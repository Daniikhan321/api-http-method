"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">HTTP API Practice</h1>

          <ul className="flex gap-6 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/get">GET</Link>
            </li>

            <li>
              <Link href="/post">POST</Link>
            </li>

            <li>
              <Link href="/put">PUT</Link>
            </li>

            <li>
              <Link href="/delete">DELETE</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Welcome to HTTP Methods Practice
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl">
          This project is built to practice CRUD operations using Axios and
          REST APIs in Next.js.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-green-600">GET</h2>
            <p className="text-gray-500 mt-2">
              Fetch data from the API.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-blue-600">POST</h2>
            <p className="text-gray-500 mt-2">
              Create new records.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-yellow-600">PUT</h2>
            <p className="text-gray-500 mt-2">
              Update existing records.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-red-600">DELETE</h2>
            <p className="text-gray-500 mt-2">
              Remove records from the API.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}