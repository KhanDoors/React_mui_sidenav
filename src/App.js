import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./pages/dashboard/Sidenav";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sidenav/*" element={<Sidenav />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
