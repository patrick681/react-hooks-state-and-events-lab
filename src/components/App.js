import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Set up state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Step 2: Toggle dark mode on button click
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Step 3: Dynamically set the className based on darkMode state
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Add an onClick event to toggle dark mode */}
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
