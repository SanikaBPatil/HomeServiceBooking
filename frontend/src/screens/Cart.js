import React from "react";  
import { Link } from "react-router-dom";

const Cart = ({ cart = [] }) => {
    
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.siteName}>🏠 Home Service Booking</h1>
        <nav>
          <ul style={styles.nav}>
            <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
            <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
            <li style={styles.navItem}><Link to="/cart" style={{ ...styles.navLink, fontWeight: "bold", textDecoration: "underline" }}>Booked Services 🛠️ ({cart?.length || 0})</Link></li>
            <li><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* Cart Section */}
      <h1 style={styles.title}>🛠️ Your Booked Services</h1>
      {cart.length === 0 ? (
        <p style={styles.emptyMessage}>Your booking list is empty. Browse our services and schedule your appointment!</p>
      ) : (
        <div style={styles.grid}>
          {cart.map((serviceItem) => (
            <div key={serviceItem.id} style={styles.card}>
              <img src={serviceItem.image} alt={serviceItem.name} style={styles.image} />
              <h2 style={styles.packageName}>{serviceItem.name}</h2>
              <p style={styles.details}>Service Type: {serviceItem.type}</p>
              <p style={styles.details}>Duration: {serviceItem.duration} hours</p>
              <p style={styles.details}>Price: {serviceItem.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { fontFamily: "'Poppins', sans-serif", backgroundColor: "#c9c9cc", minHeight: "100vh", paddingBottom: "40px" },
  navbar: { backgroundColor: "#2E8B57", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" },
  siteName: { margin: "0", fontSize: "24px", fontWeight: "bold" },
  nav: { listStyle: "none", display: "flex", gap: "20px", margin: "0", padding: "0" },
  navItem: { fontSize: "18px", fontWeight: "500" },
  navLink: { textDecoration: "none", color: "white", transition: "0.3s" },
  title: { textAlign: "center", fontSize: "30px", fontWeight: "bold", color: "#333", marginTop: "20px" },
  emptyMessage: { textAlign: "center", fontSize: "18px", color: "#777" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", padding: "30px", maxWidth: "1100px", margin: "auto" },
  card: { backgroundColor: "#fff", borderRadius: "12px", padding: "15px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" },
  image: { width: "100%", height: "150px", borderRadius: "10px", objectFit: "cover" },
  packageName: { fontSize: "20px", fontWeight: "bold" },
  details: { fontSize: "15px", color: "#555" },
};

export default Cart;