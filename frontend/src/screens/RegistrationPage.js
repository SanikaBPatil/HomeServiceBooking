import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");
    setMessage("");

    if (!name || !email || !password || !confirmPassword || !phone || !address) {
      setError("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    if (address.length < 5) {
      setError("Address must be at least 5 characters long.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
        confirmPassword,
        phone,
        address,
      });
      setMessage(response.data.message);
      if (response.data.message === "Registration successful!") {
        navigate("/login");
      }
    } catch (err) {
      alert(JSON.stringify(err));
      setError(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "#007bff", textTransform: "uppercase", marginTop: "20px", marginBottom: "10px", letterSpacing: "2px", fontFamily: "Arial, sans-serif" }}>Home Service Booking System</h1>
      <div style={{ width: "40%", maxWidth: "400px", margin: "20px auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px", color: "#333", fontSize: "24px" }}>Register Page</h2>
        {error && <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>{error}</p>}
        {message && <p style={{ color: "green", fontSize: "14px", marginBottom: "10px" }}>{message}</p>}

        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "70%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "70%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "70%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: "70%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "70%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "70%", padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />

        <button onClick={handleRegister} style={{ width: "100%", padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "18px", marginTop: "10px" }}>Register</button>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>Already have an account? <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>Login</a></p>
      </div>
    </div>
  );
};

export default Register;