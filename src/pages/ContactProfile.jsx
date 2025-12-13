import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function ContactProfile() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const loadContact = async () => {
    try {
      const res = await API.get(`/contacts/${id}`);
      setContact(res.data);
      setNotes(res.data.notes || []);
    } catch (err) {
      console.error("CONTACT LOAD ERROR:", err);
    }
  };

  const addNote = async () => {
    if (!newNote.trim()) return;

    try {
      const res = await API.post(`/contacts/${id}/notes`, {
        text: newNote,
      });

      setNotes(res.data.notes);
      setNewNote("");
    } catch (err) {
      console.error("NOTE ADD ERROR:", err);
    }
  };

  useEffect(() => {
    loadContact();
  }, [id]);

  if (!contact) return <div>Loading contact...</div>;

  return (
    <div style={{ padding: 25 }}>
      <h2 style={{ color: "#c200ff" }}>{contact.name}</h2>

      <div style={{ marginBottom: 20 }}>
        <div>Email: {contact.email}</div>
        <div>Phone: {contact.phone}</div>
      </div>

      <h3 style={{ marginTop: 30 }}>Notes</h3>

      <div style={{ marginBottom: 20 }}>
        {notes.length === 0 ? (
          <p>No notes yet.</p>
        ) : (
          notes.map((n, i) => (
            <div
              key={i}
              style={{
                padding: 12,
                background: "#13172b",
                borderRadius: 8,
                color: "white",
                marginBottom: 12,
                boxShadow: "0 0 10px rgba(0, 234, 255, 0.3)",
              }}
            >
              {n.text}
            </div>
          ))
        )}
      </div>

      <textarea
        placeholder="Add a note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          background: "#0d0f1a",
          color: "white",
          border: "1px solid #334155",
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      <button
        onClick={addNote}
        style={{
          background: "linear-gradient(135deg, #00eaff, #c200ff)",
          padding: "10px 18px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          color: "white",
          boxShadow:
            "0 0 12px rgba(0, 234, 255, .6), 0 0 18px rgba(194, 0, 255, .6)",
          fontWeight: 600,
        }}
      >
        Add Note
      </button>
    </div>
  );
}
