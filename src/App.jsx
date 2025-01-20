import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import SavingsGoals from './components/SavingsGoals' 
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Welcome to My Finance Dashboard!</p>
            </main>
            <SavingsGoals />
            <Footer />
        </div>
    );
};

export default App;



