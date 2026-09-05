import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/mainmenu";
import CategoryPage from "./pages/CategoryPage";
import DishDetails from "./pages/DishDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/dish/:id" element={<DishDetails />} />
      </Routes>
    </BrowserRouter>
  );
}