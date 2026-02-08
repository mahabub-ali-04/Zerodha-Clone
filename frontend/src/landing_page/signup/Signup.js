import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only (no backend)
    alert("Signup UI only (no backend).");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">Signup</h1>
        <p className="signup-subtitle">Create your account to continue</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <label className="signup-label">Name</label>
          <input
            className="signup-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />

          <label className="signup-label">Email</label>
          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <label className="signup-label">Password</label>
          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="Min 6 characters"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
          />

          <button className="signup-btn" type="submit">
            Create account
          </button>

          <p className="signup-note">
            By continuing, you agree to our Terms & Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
