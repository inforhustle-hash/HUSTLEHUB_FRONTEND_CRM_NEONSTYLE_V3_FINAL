import { useEffect, useState } from "react";
import API from "../api/api";

const boardStyle = {
  display: "flex",
  gap: 20,
  padding: 20
};

const columnStyle = {
  flex: 1,
  background: "#0c0f1c",
  borderRadius: 12,
  padding: 15,
  color: "white",
  boxShadow: "0 0 12px rgba(0, 234, 255, 0.25), 0 0 20px rgba(194, 0, 255, 0.25)"
};

const dealStyle = {
  background: "#13172b",
  padding: 12,
  borderRadius: 8,
  marginBottom: 12,
  boxShadow: "0 0 10px rgba(0, 234, 255, 0.2)"
};

const stages = ["Lead", "Contacted", "Qualified", "Closed"];

export default function Pipelines() {
  const [deals, setDeals] = useState([]);

  const loadDeals = async () => {
    try {
      const res = await API.get("/pipelines");
      setDeals(res.data);
    } catch (err) {
      console.error("PIPELINE LOAD ERROR:", err);
    }
  };

  useEffect(() => {
    loadDeals();
  }, []);

  return (
    <div style={{ padding: 25 }}>
      <h2 style={{ color: "#c200ff" }}>Pipelines</h2>

      <div style={boardStyle}>
        {stages.map((stage) => (
          <div key={stage} style={columnStyle}>
            <h3>{stage}</h3>

            {deals
              .filter((d) => d.stage === stage)
              .map((d) => (
                <div key={d._id} style={dealStyle}>
                  <strong>{d.title}</strong>
                  <div>${d.value}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>
                    {d.description}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
