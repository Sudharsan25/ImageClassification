import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Predicted from "./components/Predicted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predicted" element={<Predicted />} />
    </Routes>
  );
}

export default App;
