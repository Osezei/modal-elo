import React, { useState, useEffect } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import Hero from "./Hero";
import HeroDark from "./HeroDark";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <section>
      <nav className="container flex justify-between text-2xl font-bold py-2">
        <h3>GameMode</h3>

        <button onClick={toggleTheme}>
          {theme === "light-theme" ? <BsToggle2Off /> : <BsToggle2On />}
        </button>
      </nav>
      {theme === "dark-theme" ? <HeroDark /> : <Hero />}
    </section>
  );
};

export default Navbar;
