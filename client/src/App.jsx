import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import CategoryPage from "./pages/CategoryPage";
import DishDetails from "./pages/DishDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Menu Page - Category Cards පේන තැන */}
        <Route path="/" element={<MainMenu />} />

        {/* Category Page - Rice, Drinks වගේ Category එකක කෑම ලැයිස්තුව පේන තැන */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* Dish Details Page - එක කෑම ජාතියක සම්පූර්ණ තොරතුරු පේන තැන */}
        <Route path="/dish/:id" element={<DishDetails />} />
      </Routes>
    </BrowserRouter>
  );
}