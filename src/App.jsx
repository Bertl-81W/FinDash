import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import SavingsGoals from './components/SavingsGoals'; 
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import './styles/App.css';

const App = () => {
    return (
        <Router>
           <div className="App">
            <Header />
            <main>
                <Routes>
                    {/* Home route */}
                    <Route path="/" element={
                        <div>
                            <p>Welcome to My Finance Dashboard!</p>
                        </div>
                       }
                    />
                    {/* Dashboard route */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* SavingsGoals route */}
                    <Route path="/goals" element={<SavingsGoals />} />   
                    <Route path="/reports" element={<Reports />} />                 
                </Routes>                
            </main>            
            <Footer />
        </div>
        </Router>
    );
};

export default App;



