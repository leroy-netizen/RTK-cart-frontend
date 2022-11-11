import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import FourOhFour from "./components/FourOFour";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<FourOhFour />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Routes>
    </div>
  );
} 

export default App;
