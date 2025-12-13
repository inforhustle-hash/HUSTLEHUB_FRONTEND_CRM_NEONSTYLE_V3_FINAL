import { useAuth } from "../context/AuthContext";
import "./header.css";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="header">
      <div className="header-title">
        Welcome, {user?.name || "User"}
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
