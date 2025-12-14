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

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
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
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 16,
            borderRadius: 6,
            border: "1px solid #1f2937",
            background: "var(--bg-panel-2)",
            color: "var(--text-main)",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 6,
            border: "none",
            background: "var(--neon-cyan)",
            color: "#020617",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "var(--glow-cyan)",
          }}
        >
          Login
        </button>

        {error && (
          <p
            style={{
              marginTop: 12,
              textAlign: "center",
              color: "var(--neon-pink)",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

