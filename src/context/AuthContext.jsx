import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase";

// create the context
const AuthContext = createContext();

// provide Auth Context to the app
export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null); // store the authenticated user
    const auth = getAuth(app);

    //listen foe authetification state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);  
        });

    // cleanup the lsitener on unmount
    return () => unsubscribe();
    }, [auth]);

    //logout function
    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, logout }}>
           {children} 
        </AuthContext.Provider>
    );
};

// hook to use AuthContext in components
export const useAuth = () => useContext(AuthContext);