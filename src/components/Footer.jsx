import React from "react";
import "./Footer.css";

const Footer = () => {   
        const handleBackToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth', 
            });
          };

      return (  
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 My Finance Dashboard</p>            
            <button onClick={handleBackToTop} className="back-to-top">
                Back to Top
                </button>
          </div>
        </footer>
    );
};

export default Footer;
