import React from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import FigureGrid from "../components/FigureGrid";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
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
      <div className="min-h-screen flex items-center justify-center bg-camoTan text-jetBlack font-stencil">
        <p className="text-lg animate-pulse">Loading your collection...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-camoTan text-jetBlack font-stencil">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-armyGreen text-white shadow-md">
        <h1 className="text-2xl font-bold">GI Joe Collector Tracker</h1>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block">
            Welcome, {user.displayName || user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-joeRed hover:bg-joeBlue rounded-lg text-sm font-medium transition"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Temporary Seed Button */}
      <div className="p-6">
        <button
          onClick={seedFigures}
          className="px-4 py-2 bg-joeBlue hover:bg-joeRed text-camoTan rounded-lg shadow-md transition"
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
