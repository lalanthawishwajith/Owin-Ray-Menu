const express = require("express");
const router = express.Router();
const Dish = require("../Models/Dish");

// Get all dishes or filter by category
router.get("/", async (req, res) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const dishes = await Dish.find(filter);
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single dish by ID
router.get("/:id", async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new dish
router.post("/", async (req, res) => {
  try {
    const dish = new Dish(req.body);
    const savedDish = await dish.save();
    res.status(201).json(savedDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;