import React from "react";
import Maktabhayoti from "./pages/Maktabhayoti";

import Boshsahifa from "./pages/Boshsahifa";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Boshsahifa />} />
          <Route exact path="/maktabhayoti" element={<Maktabhayoti />} />

          <Route path="/take1" element={<Maktabhayoti />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
