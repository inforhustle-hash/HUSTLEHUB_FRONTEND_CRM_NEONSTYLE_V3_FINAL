import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // backend returns { token }
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--bg-main)",
      }}
    >
      <div
        style={{
          background: "var(--bg-panel)",
          padding: 40,
          borderRadius: 12,
          width: 360,
          boxShadow: "var(--glow-cyan)",
        }}
      >
        <h2 style={{ marginBottom: 20, textAlign: "center" }}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 12,
            borderRadius: 6,
            border: "1px solid #1f2937",
            background: "var(--bg-panel-2)",
            color: "var(--text-main)",
          }}
        />

        <input
          type="password"
          placeh
