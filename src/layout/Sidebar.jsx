import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const { pathname } = useLocation();

  // highlight active link
  const isActive = (path) => pathname === path;

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">HustleHub CRM</h2>

      <Link className={isActive("/") ? "active" : ""} to="/">Dashboard</Link>
      <Link className={isActive("/contacts") ? "active" : ""} to="/contacts">Contacts</Link>
      <Link className={isActive("/pipelines") ? "active" : ""} to="/pipelines">Pipelines</Link>
    </div>
  );
}
