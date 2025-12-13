const cardStyle = {
  background: "var(--bg-panel)",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 0 20px rgba(168,85,247,0.15)",
  border: "1px solid #1f2933"
};

export default function Dashboard() {
  return (
    <div>
      <h1 style={{ color: "var(--neon-purple)" }}>Dashboard</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        <div style={cardStyle}>Leads</div>
        <div style={cardStyle}>Contacts</div>
        <div style={cardStyle}>Pipelines</div>
      </div>
    </div>
  );
}
