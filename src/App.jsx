import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Item from "./components/Item";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
