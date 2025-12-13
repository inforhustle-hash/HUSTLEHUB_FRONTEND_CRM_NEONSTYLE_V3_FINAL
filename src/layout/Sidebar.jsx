import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>HustleHub CRM</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/pipelines">Pipelines</Link>
    </div>
  );
}
