import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getDishById } from "../api/api";

export default function DishDetails() {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDishById(id)
      .then((res) => {
        setDish(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ padding: 20 }}>Loading dish details...</div>;
  if (!dish) return <div style={{ padding: 20 }}>Dish not found.</div>;

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <Link to={`/category/${dish.category}`} style={{ textDecoration: "none", color: "#666" }}>
        &larr; Back to {dish.category}
      </Link>
      
      <h1 style={{ marginTop: 16 }}>
        {dish.name} {dish.avgRating > 0 ? `⭐ ${dish.avgRating}` : "⭐ New"}
      </h1>

      {dish.imageUrl && (
        <img
          src={dish.imageUrl}
          alt={dish.name}
          style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 12 }}
        />
      )}

      <p style={{ fontSize: 16, color: "#444", margin: "16px 0" }}>{dish.description}</p>
      <div style={{ fontSize: 22, fontWeight: "bold", color: "#2e7d32" }}>Rs. {dish.price}</div>
    </div>
  );
}