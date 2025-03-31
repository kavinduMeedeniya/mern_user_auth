import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard"; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "#f5f5f5",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  maxWidth: "600px",
                }}
              >
                <h1
                  style={{
                    fontSize: "48px",
                    color: "#333",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Welcome
                </h1>
                <h2
                  style={{
                    fontSize: "24px",
                    color: "#666",
                    marginBottom: "20px",
                    fontWeight: "normal",
                  }}
                >
                  To Our Company
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    marginBottom: "40px",
                    lineHeight: "1.5",
                  }}
                >
                  Handcrafting is the art of creating unique, high-quality items
                  with skill and precision. It has been a cherished tradition
                  for centuries, passed down through generations to preserve
                  craftsmanship and creativity
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <Link to="/login">
                    <button
                      style={{
                        padding: "10px 40px",
                        background: "#333",
                        color: "white",
                        border: "none",
                        borderRadius: "25px",
                        fontSize: "16px",
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }}
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      style={{
                        padding: "10px 40px",
                        background: "#333",
                        color: "white",
                        border: "none",
                        borderRadius: "25px",
                        fontSize: "16px",
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }}
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} /> {/* Add admin route */}
      </Routes>
    </Router>
  );
}

export default App;