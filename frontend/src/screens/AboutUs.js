import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div style={styles.container}>
      {/* 🏠 Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.siteName}>🏠 Home Service Booking</h1>
        <nav>
          <ul style={styles.nav}>
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/about" style={{ ...styles.navLink, fontWeight: "bold", textDecoration: "underline" }}>About Us</Link></li>
            <li><Link to="/cart" style={styles.navLink}>Booked Services</Link></li>
            <li><Link to="/contact" style={styles.navLink}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🏡 About Section */}
      <h1 style={styles.title}>🏡 Welcome to Home Service Booking</h1>
      <p style={styles.text}>
        At <strong>Home Service Booking</strong>, we connect you with professional and reliable home service providers.
        From plumbing to electrical repairs, cleaning, and maintenance, we ensure hassle-free service at your doorstep.
      </p>

      {/* ⭐ Why Choose Us - Cards */}
      <h2 style={styles.subtitle}>⭐ Why Choose Us?</h2>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>🛠 Expert Technicians</h3>
          <p>Highly skilled professionals to get the job done right.</p>
        </div>
        <div style={styles.card}>
          <h3>💰 Affordable Pricing</h3>
          <p>Transparent pricing with no hidden costs.</p>
        </div>
        <div style={styles.card}>
          <h3>🕒 Quick & Reliable</h3>
          <p>Book a service and get assistance in no time.</p>
        </div>
        <div style={styles.card}>
          <h3>✅ Quality Assurance</h3>
          <p>We ensure top-quality service and customer satisfaction.</p>
        </div>
        <div style={styles.card}>
          <h3>☎ 24/7 Support</h3>
          <p>We are available round the clock to assist you.</p>
        </div>
      </div>

      {/* 📍 Office Location */}
      <h2 style={styles.subtitle}>🏢 Visit Our Office</h2>
      <div style={styles.locationCard}>
        <h3>📍 Location</h3>
        <p><strong>123, Service Avenue, Home City, Country</strong></p>
        <h3>🕒 Office Timings</h3>
        <p><strong>9 AM - 8 PM (Monday to Sunday)</strong></p>
      </div>
    </div>
  );
};

// 🌟 Styles
const styles = {
  container: { fontFamily: "'Poppins', sans-serif", backgroundColor: "#c9c9cc", minHeight: "100vh", paddingBottom: "40px", textAlign: "center" },
  navbar: { backgroundColor: "#335288", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" },
  siteName: { margin: "0", fontSize: "24px", fontWeight: "bold" },
  nav: { listStyle: "none", display: "flex", gap: "20px", margin: "0", padding: "0" },
  navLink: { textDecoration: "none", color: "white", fontSize: "18px", fontWeight: "500", padding: "10px", borderRadius: "5px" },
  title: { fontSize: "30px", fontWeight: "bold", color: "#333", marginTop: "20px" },
  text: { fontSize: "18px", color: "#555", maxWidth: "800px", margin: "auto", lineHeight: "1.6" },
  subtitle: { fontSize: "24px", fontWeight: "bold", marginTop: "20px", color: "#222" },
  cardContainer: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px", maxWidth: "1000px", margin: "auto" },
  card: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
  locationCard: { backgroundColor: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center", maxWidth: "500px", margin: "20px auto", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
};

export default AboutUs;
