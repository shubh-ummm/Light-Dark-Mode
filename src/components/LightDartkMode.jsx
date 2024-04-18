import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

const LightDartkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello World</h1>
        <button onClick={handleThemeToggle}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDartkMode;
