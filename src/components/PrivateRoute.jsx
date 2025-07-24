import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser === undefined) {    
    return null;
  }

  return currentUser ? children : <Navigate to="/" />;
};

export default PrivateRoute;
