"use client";

import React, { useState, useEffect } from "react";

export default function SecurityAnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the banner in this session
    const isDismissed = sessionStorage.getItem("announcementDismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Save state so it stays hidden during the browser session
    sessionStorage.setItem("announcementDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <div style={styles.container}>
        <div style={styles.content}>
          <span style={styles.icon} role="img" aria-label="Warning">
            ⚠️
          </span>
          <p style={styles.text}>
            <strong>Important Notice:</strong> This website is currently under maintenance. 
            Please be cautious of fraudulent calls or messages claiming to represent <strong>Kalyani Finance</strong>. 
            Do not share your OTP, PIN, passwords, bank details, or sensitive information.
          </p>
        </div>
        <button 
          onClick={handleDismiss} 
          style={styles.closeButton}
          aria-label="Close announcement"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

// Inline styles for quick and seamless integration
const styles = {
  banner: {
    position: "sticky" as const,
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff3cd", // Soft amber warning background
    color: "#856404",            // Dark amber text for high readability
    borderBottom: "1px solid #ffeeba",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    zIndex: 99999,
    fontFamily: "var(--font-sans, system-ui, sans-serif)",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "13px",
    lineHeight: "1.4",
  },
  icon: {
    fontSize: "18px",
    flexShrink: 0,
  },
  text: {
    margin: 0,
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "#856404",
    fontSize: "20px",
    cursor: "pointer",
    padding: "0 5px",
    flexShrink: 0,
    fontWeight: "bold",
    transition: "opacity 0.2s",
  },
};