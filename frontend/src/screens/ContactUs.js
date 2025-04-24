import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      {/* 🏡 Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.appName}>🏡 Home Service Booking</h1>
        <nav>
          <ul style={styles.nav}>
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/about" style={styles.navLink}>About Us</Link></li>
            <li><Link to="/cart" style={styles.navLink}>Booked Services</Link></li>
            <li><Link to="/contact" style={{ ...styles.navLink, fontWeight: "bold", textDecoration: "underline" }}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* 📞 Contact Section */}
      <h1 style={styles.title}>📞 Contact Us</h1>
      <p style={styles.text}>
        Need assistance? Get in touch with us for all your home service needs.
      </p>

      {/* 📍 Contact Info - Cards */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>📍 Office Address</h2>
          <p>🏠 <strong>123, Service Street, City Center, India</strong></p>
        </div>
        <div style={styles.card}>
          <h2>📞 Phone Numbers</h2>
          <p>📱 Bookings: <strong>+91 98765 43210</strong></p>
          <p>📱 Support: <strong>+91 87654 32109</strong></p>
        </div>
        <div style={styles.card}>
          <h2>📧 Email</h2>
          <p>📩 Inquiries: <strong>info@homeservice.com</strong></p>
          <p>📩 Support: <strong>support@homeservice.com</strong></p>
        </div>
        <div style={styles.card}>
          <h2>⏰ Working Hours</h2>
          <p>🕒 Monday - Sunday: <strong>7:00 AM - 9:00 PM</strong></p>
        </div>
      </div>
    </div>
  );
};

// 🌟 Styles
const styles = {
  container: { fontFamily: "'Poppins', sans-serif", backgroundColor: "#c9c9cc", minHeight: "100vh", paddingBottom: "40px", textAlign: "center" },
  navbar: { backgroundColor: "#335288", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" },
  appName: { margin: "0", fontSize: "24px", fontWeight: "bold" },
  nav: { listStyle: "none", display: "flex", gap: "20px", margin: "0", padding: "0" },
  navLink: { textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "500", padding: "10px", borderRadius: "5px" },
  title: { fontSize: "30px", fontWeight: "bold", color: "#333", marginTop: "20px" },
  text: { fontSize: "18px", color: "#555", maxWidth: "800px", margin: "auto", lineHeight: "1.6" },
  cardContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px", maxWidth: "1000px", margin: "auto" },
  card: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
};

export default ContactUs;
