import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
