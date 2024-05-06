// ClassFilter.js
import React, { useState } from "react";

const ClassFilter = ({ classes, handleFilter }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const toggleClass = (className) => {
    if (selectedClasses.includes(className)) {
      setSelectedClasses(selectedClasses.filter((cls) => cls !== className));
    } else if (selectedClasses.length < 3) {
      setSelectedClasses([...selectedClasses, className]);
    }
    handleFilter(selectedClasses);
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
            disabled={selectedClasses.length === 3 && !selectedClasses.includes(className)}
          />
          {className}
        </label>
      ))}
    </div>
  );
};

export default ClassFilter;
