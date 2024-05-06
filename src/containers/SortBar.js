// SortBar.js
import React from "react";

const SortBar = ({ handleSort }) => {
  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
