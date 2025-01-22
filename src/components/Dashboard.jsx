import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

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
    
      useEffect(() => {
        fetchSavingsGoals();
      }, []);
    
      return (
        <div>
          <h1>Savings Dashboard</h1>
          <div>
            <h2>Add a Savings Goal</h2>
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
              <ul>
                {goals.map((goal) => (
                  <li key={goal.id}>
                    <strong>{goal.title}:</strong> ${goal.amount.toFixed(2)}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No savings goals yet. Add one above!</p>
            )}
          </div>
        </div>
      );
    };
    
    export default Dashboard;

