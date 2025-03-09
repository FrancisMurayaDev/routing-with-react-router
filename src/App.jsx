import "./App.css";
import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Fragment>
     <Header />
      <h1>Website Logo</h1>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
