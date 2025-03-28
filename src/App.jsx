import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/websitepage/Home/home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
