import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import FigureGrid from "../components/FigureGrid";

export default function Dashboard({ user }) {
  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md">
        <h1 className="text-2xl font-bold">
          GI Joe Collector Tracker
        </h1>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block">
            Welcome, {user.displayName || user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* Figure Grid */}
        <FigureGrid user={user} />
      </main>
    </div>
  );
}
