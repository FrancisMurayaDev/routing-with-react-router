import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <h1>Website Logo</h1>
      <Routes>
        <Route path="/" element={<h1>This is the Home Page</h1>} />
        <Route path="/about" element={<h1>This is the About Page</h1>} />
        <Route path="/contact" element={<h1>This is the contacts page</h1>} />
      </Routes>
    </Fragment>
  );
}

export default App;
