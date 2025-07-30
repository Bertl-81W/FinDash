import './styles/index.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"; 
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from './context/AuthContext';




function App() {
  return (  
    <AuthProvider>  
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={ 
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>  
      </AuthProvider>
  );
}

export default App;
