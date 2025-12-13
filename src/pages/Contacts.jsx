import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const loadContacts = async () => {
    try {
      const res = await API.get("/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("CONTACTS LOAD ERROR:", err);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div style={{ padding: 25 }}>
      <h2 style={{ marginBottom: 20 }}>Contacts</h2>

      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: 15,
          }}
        >
          {contacts.map((c) => (
            <div
              key={c._id}
              onClick={() => navigate(`/contacts/${c._id}`)}
              style={{
                padding: 18,
                borderRadius: 12,
                background: "#0a0f1f",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 0 10px #00aaff",
              }}
            >
              <strong>{c.name}</strong>
              <div>{c.email}</div>
              <div>{c.phone}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
