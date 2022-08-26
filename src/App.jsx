import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
