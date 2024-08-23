import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Announces from "./pages/Announces";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/annonce/:id" element={<Announces />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
