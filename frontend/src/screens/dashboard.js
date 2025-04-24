import React from "react";
import { Link } from "react-router-dom";
import cleaningService from "../assets/cleaner.jpg";
import plumbingService from "../assets/plumbing.jpg";
import electricalService from "../assets/electrician.jpg";
import homePainting from "../assets/painter.jpg";
import applianceRepair from "../assets/carpenter.jpg";
import pestControl from "../assets/pestcontrol.jpg";

const Dashboard = ({ cart, setCart }) => {
  const services = [
    { id: 1, name: "Home Cleaning", duration: "2-4 Hours", provider: "Professional Cleaners", price: "₹1,500", image: cleaningService },
    { id: 2, name: "Plumbing Services", duration: "1-3 Hours", provider: "Certified Plumbers", price: "₹800", image: plumbingService },
    { id: 3, name: "Electrical Repair", duration: "1-2 Hours", provider: "Licensed Electricians", price: "₹1,200", image: electricalService },
    { id: 4, name: "Home Painting", duration: "2-5 Days", provider: "Expert Painters", price: "₹5,000", image: homePainting },
    { id: 5, name: "Appliance Repair", duration: "1-3 Hours", provider: "Authorized Technicians", price: "₹1,000", image: applianceRepair },
    { id: 6, name: "Pest Control", duration: "2-4 Hours", provider: "Certified Exterminators", price: "₹2,500", image: pestControl },
  ];

  const bookService = (service) => { 
    if (!cart || !Array.isArray(cart)) {
        console.error("Cart is undefined or not an array.");
        return;
    }
  
    if (!cart.some((item) => item.id === service.id)) {
        setCart([...cart, service]);
        alert(`✅ ${service.name} has been added to your Booked Services!`);
    } else {
        alert(`⚠️ ${service.name} is already in your Booked Services!`);
    }
  };

  return (
    <div style={styles.container}>
      {/* 🏡 Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.showroomName}>🏡 Home Service Booking</h1>
        <nav>
          <ul style={styles.nav}>
            <li><Link to="/" style={styles.navLink}>Dashboard</Link></li>
            <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
            <li><Link to="/cart" style={styles.navLink}>Booked Services 🛒 ({cart?.length || 0})</Link></li>
            <li><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <h2 style={styles.title}>✨ Find Trusted Professionals for Your Home ✨</h2>

      {/* 🏠 Service Cards */}
      <div style={styles.grid}>
        {services.map((service) => (
          <div key={service.id} style={styles.card}>
            <img src={service.image} alt={service.name} style={styles.image} />
            <h2 style={styles.serviceName}>{service.name}</h2>
            <p style={styles.details}>Duration: {service.duration}</p>
            <p style={styles.details}>Provider: {service.provider}</p>
            <p style={styles.price}>{service.price}</p>
            <button style={styles.button} onClick={() => bookService(service)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 Styles (Unchanged)
const styles = {
  container: { fontFamily: "'Poppins', sans-serif", backgroundColor: "#c9c9cc", minHeight: "100vh", paddingBottom: "40px" },
  navbar: { backgroundColor: "#335288", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" },
  showroomName: { margin: "0", fontSize: "24px", fontWeight: "bold" },
  nav: { listStyle: "none", display: "flex", gap: "25px", margin: "0", padding: "0" },
  navLink: { textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "500", padding: "10px", borderRadius: "5px" },
  title: { textAlign: "center", fontSize: "30px", fontWeight: "bold", color: "#333", marginTop: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", padding: "40px", maxWidth: "1200px", margin: "auto" },
  card: { backgroundColor: "#fff", borderRadius: "12px", padding: "20px", textAlign: "center" },
  image: { width: "100%", borderRadius: "10px", height: "220px", objectFit: "cover" },
  serviceName: { fontSize: "22px", fontWeight: "bold" },
  details: { fontSize: "16px", color: "#555" },
  price: { fontSize: "20px", fontWeight: "600", color: "#FF5733" },
  button: { backgroundColor: "#335288", color: "#fff", padding: "12px 25px", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" },
};

export default Dashboard;
