import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const SavingsGoals = () => {
  
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert("Please fill out both the title and amount fields.");
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
    } catch (error) {
      console.error("Error adding savings goal:", error);
      alert("Failed to add savings goal. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Savings Goals</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Goal Title:
          </label>
           <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter goal title"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Goal Amount:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter goal amount"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};
const handleAddGoal = async () => {
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
  

export default SavingsGoals;


