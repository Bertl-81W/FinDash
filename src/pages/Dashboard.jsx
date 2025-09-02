import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import FigureGrid from "../components/FigureGrid";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import data from "../data/figures.json"; 

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const seedFigures = async () => {
    try {
      const colRef = collection(db, "figures");
      for (let fig of data) {
        await addDoc(colRef, {
          ...fig,
          uid: user.uid,
          owned: false,
        });
      }
      alert("Figures seeded into Firestore!");
    } catch (error) {
      console.error("Error seeding figures:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-camoTan text-jetBlack dark:bg-jetBlack dark:text-camoTan">
        <p className="text-lg animate-pulse font-stencil">Loading your collection...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-camoTan text-jetBlack dark:bg-jetBlack dark:text-camoTan font-stencil">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-jetBlack text-joeBlue shadow-md">
        <h1 className="text-3xl font-bold">GI Joe Collector Tracker</h1>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block">
            Welcome, {user.displayName || user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-joeRed hover:bg-oliveDrab rounded-lg text-white font-semibold transition-colors"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Seed Figures Button */}
      <div className="p-6 flex justify-start">
        <button
          onClick={seedFigures}
          className="px-4 py-2 bg-joeBlue hover:bg-armyGreen rounded-lg text-white font-semibold transition-colors"
        >
          Seed Figures into Firestore
        </button>
      </div>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        <FigureGrid user={user} />
      </main>
    </div>
  );
}
