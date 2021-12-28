import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/categories/Home";
import ErrorPage from "./components/error_page/ErrorPage";
import Characters from "./components/categories/Characters";
import Comics from "./components/categories/Comics";
import Creators from "./components/categories/Creators";
import Events from "./components/categories/Events";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
