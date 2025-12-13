import React from "react";            // 🔥 REQUIRED — this fixes the blue screen
import { Outlet, Link } from "react-router-dom";
import "./neon-theme.css";
import "./sidebar.css";
import "./header.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2 className="logo">HustleHub Funnels</h2>

        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/pipelines">Pipelines</Link>
        </nav>
      </aside>

      <main className="main-area">
        <header className="header">HustleHub Funnels</header>

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
