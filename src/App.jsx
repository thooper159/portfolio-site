import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer style={{textAlign: "center"}}>
        <p>© 2023 Tyler Hooper</p>
      </footer>
    </Router>
  );
}

export default App;
