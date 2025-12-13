import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./neon-theme.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />

      <div className="layout-main">
        <Header />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

