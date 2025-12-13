import { useEffect, useState } from "react";
import API from "../api/api";

const cardStyle = {
  background: "#0c0f1c",
  borderRadius: 12,
  padding: 20,
  color: "white",
  boxShadow: "0 0 12px rgba(0, 234, 255, 0.25), 0 0 20px rgba(194, 0, 255, 0.25)",
  border: "1px solid #1f2937",
  fontSize: 20,
  fontWeight: "600",
  textAlign: "center"
};

export default function Dashboard() {
  const [counts, setCounts] = useState({
    contacts: 0,
    pipelines: 0
  });

  const loadCounts = async () => {
    try {
      const contactsRes = await API.get("/contacts");
      const pipelinesRes = await API.get("/pipelines");

      setCounts({
        contacts: contactsRes.data.length,
        pipelines: pipelinesRes.data.length
      });

    } catch (err) {
      console.error("DASHBOARD LOAD ERROR:", err);
    }
  };

  useEffect(() => {
    loadCounts();
  }, []);

  return (
    <div style={{ padding: 25 }}>
      <h1 style={{ color: "#c200ff", marginBottom: 20 }}>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20
        }}
      >
        <div style={cardStyle}>
          Contacts  
          <div style={{ fontSize: 36, marginTop: 10 }}>
            {counts.contacts}
          </div>
        </div>

        <div style={cardStyle}>
          Pipelines  
          <div style={{ fontSize: 36, marginTop: 10 }}>
            {counts.pipelines}
          </div>
        </div>

        <div style={cardStyle}>
          Deals
          <div style={{ fontSize: 36, marginTop: 10 }}>
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

