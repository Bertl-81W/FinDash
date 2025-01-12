import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            alert('You have been logged out.');
        } catch (error) {
            console.error('Logout failed, error message');
        }
    }; 

    return (
        <header className="header">
          <h1 className="header-title">Finance Dashboard</h1>
          <nav className="header-nav">
            <a href="#" className="header-link">Dashboard</a>
            <a href="#" className="header-link">Goals</a>
            <a href="#" className="header-link">Reports</a>
          </nav>
          <div className="header-user-section">            

            {user ? (
              <>
                <span className="header-user-email">{user.email}</span>
                user && <button onClick={handleLogout} className="header-logout-button">Logout</button>
              </>
            ) : (
              <a href="/login" className="header-link">Login</a>
            )}
          </div>
        </header>
      );
    };

export default Header;
