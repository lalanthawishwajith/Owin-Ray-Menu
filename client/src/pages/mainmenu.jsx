import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Rice", emoji: "🍚" },
  { name: "Noodles", emoji: "🍜" },
  { name: "Kottu", emoji: "🍛" },
  { name: "Drinks", emoji: "🥤" },
];

export default function MainMenu() {
  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1>Digital Menu</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/category/${cat.name}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 20,
              textAlign: "center",
              textDecoration: "none",
              color: "#333",
              backgroundColor: "#f9f9f9"
            }}
          >
            <div style={{ fontSize: 32 }}>{cat.emoji}</div>
            <div style={{ fontWeight: "bold", marginTop: 8 }}>{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}