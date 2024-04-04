import { useState } from "react";


export function ColorList({ colors }) {
  const [activeColor, setActiveColor] = useState(null);

  const handleChange = (colorName) => {
    setActiveColor(colorName);
  };

  return (
    <div>
      <ul className="color-list">
        {colors.map((colorName, index) => (
          <li
            key={index} 
            onClick={() => handleChange(colorName)}
            className={activeColor === colorName ? 'active' : ''}
            style={{ backgroundColor: colorName }}
          >
          </li>
        ))}
      </ul>
    </div>
  );
}
