import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useContext } from "react";
import Hero from "./components/Hero";
import { Fade } from "react-awesome-reveal";
function App() {
  return (
    <section>
      <Fade duration={3000}>
        <Navbar />
        <Footer />
      </Fade>
    </section>
  );
}

export default App;
