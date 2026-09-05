const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    
    // Media Collection (ඡායාරූප සහ වීඩියෝ කිහිපයක් සඳහා)
    media: [
      {
        url: { type: String, required: true }, // Media file එකේ URL එක
        type: { type: String, enum: ["image", "video"], default: "image" } // image ද video ද යන්න
      }
    ],

    avgRating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dish", dishSchema);