import React, { useContext, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import JoeCard from '../components/JoeCard';


const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [joes, setJoes] = useState([
    { id: 1, name: 'Conrad Hauser', codename: 'Duke', specialty: 'Leadership' },
    { id: 2, name: 'Shana O\'Hara', codename: 'Scarlett', specialty: 'Counterintelligence' },
    { id: 3, name: 'Snake Eyes', codename: 'Snake Eyes', specialty: 'Ninja/Commando' },
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
    <div>
      <h1>GI Joe Tracker</h1>
      <p>Logged in as: {currentUser?.email}</p>
      <button onClick={handleLogout}>Logout</button>

       <h2>My Joes</h2>
      <div className="joe-list">
        {joes.map((joe) => (
          <JoeCard key={joe.id} joe={joe} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
