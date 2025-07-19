import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";


export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null); 
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);  
        });

    
    return () => unsubscribe();
    }, []);

    
    const logout = () => signOut(auth);

    return (
        <AuthContext.Provider value={{ user, logout }}>
           {!loading && children} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);