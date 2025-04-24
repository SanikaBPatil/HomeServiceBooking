import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./screens/dashboard";
import AboutUs from "./screens/AboutUs";
import Cart from "./screens/Cart";
import ContactUs from "./screens/ContactUs";
import Login from "./screens/LoginPage";
import Register from "./screens/RegistrationPage";

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect unauthenticated users to login */}
        <Route
          path="/"
          element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/dashboard" />}
        />
        
        {/* Login & Register Routes */}
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard cart={cart} setCart={setCart} /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart cart={cart} /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={isAuthenticated ? <ContactUs /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;







