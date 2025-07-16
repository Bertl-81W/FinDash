import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/dashboard.css"

const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [goals, setGoals] = useState([]);

    const fetchSavingsGoals = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "savingsGoals"));
            const goalsData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log("Fetched Goals:", goalsData);
            setGoals(goalsData);
        } catch (error) {
            console.error("Error fetching savings goals:", error);
        }       
    };

    const handleAddGoal = async () => {
        if (!title || !amount) {
          alert("Please provide both a title and an amount.");
          return;
        }
        try {
          await addDoc(collection(db, "savingsGoals"), {
            title,
            amount: parseFloat(amount),
          });
          alert("Savings goal added successfully!");
          setTitle("");
          setAmount("");
          fetchSavingsGoals();
        } catch (error) {
          console.error("Error adding savings goal:", error);
          alert("Failed to add savings goal. Please try again.");
        }
      };

      const calculateTotalSavings = () => {
        return goals.reduce((total, goal) => total + goal.amount, 0).toFixed(2);
    };
    
      useEffect(() => {
        fetchSavingsGoals();
      }, []);
    
      return (
        <div className="dashboard">
          <h2>Savings Goals</h2>          
            <div>            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddGoal();
              }}
            >
              <input
                type="text"
                placeholder="Goal Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Goal Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button type="submit">Add Goal</button>
            </form>
          </div> 
          <div>
            <h2>Your Savings Goals</h2>
            {goals.length > 0 ? (
                <>
              <ul>
              {goals.map((goal) => {
                console.log("Rendering Goal:", goal); // Debug log
                return (
                    <li key={goal.id}>
                        <strong>{goal.title}:</strong> ${goal.amount.toFixed(2)}
                    </li>
                );
            })}
              </ul>
              <h3> Total Savings: ${calculateTotalSavings()}</h3>
              </>
            ) : (
              <p>No savings goals yet. Add one above!</p>
            )}
          </div>
        </div>
      );
    };
    
    export default Dashboard;

/*<ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <strong>{goal.title}</strong>: ${goal.amount.toFixed(2)}
                    </li>
                ))}
            </ul> 
*/