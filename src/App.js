import "./App.css";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
