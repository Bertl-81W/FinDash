import React, { useContext, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import JoeCard from "../components/JoeCard";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [joes, setJoes] = useState([
    { id: 1, name: "Conrad Hauser", codename: "Duke", specialty: "Leadership" },
    { id: 2, name: "Shana O'Hara", codename: "Scarlett", specialty: "Counterintelligence" },
    { id: 3, name: "Snake Eyes", codename: "Snake Eyes", specialty: "Ninja/Commando" },
  ]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-purple-500 p-6 text-white">
      <div className="max-w-5xl mx-auto bg-armyGreen shadow-lg rounded-lg p-8 border-2 border-camoTan">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold tracking-wider text-joeRed drop-shadow">
            G.I. JOE TRACKER
          </h1>
          <h1 className="text-red-500">Test Tailwind</h1>

          <button
            onClick={handleLogout}
            className="mt-2 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded shadow-md transition"
          >
            Logout
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4 border-b border-green-600 pb-1">My Joes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {joes.map((joe) => (
          <JoeCard key={joe.id} joe={joe} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;