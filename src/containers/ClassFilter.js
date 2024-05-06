// ClassFilter.js
import React, { useState } from "react";

const ClassFilter = ({ classes, handleFilter }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const toggleClass = (className) => {
    const updatedClasses = selectedClasses.includes(className)
      ? selectedClasses.filter((cls) => cls !== className)
      : [...selectedClasses, className];
    setSelectedClasses(updatedClasses);
    handleFilter(updatedClasses);
  };

  return (
    <div>
      {classes.map((className) => (
        <label key={className}>
          <input
            type="checkbox"
            value={className}
            checked={selectedClasses.includes(className)}
            onChange={() => toggleClass(className)}
          />
          {className}
        </label>
      ))}
      {selectedClasses.length < 3 && <p>Please select at least three classes.</p>}
    </div>
  );
};

export default ClassFilter;
