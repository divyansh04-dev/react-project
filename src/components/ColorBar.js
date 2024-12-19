import { useState } from 'react';

const colors = ['White', 'Blue', 'Orange', 'Pink', 'Green', 'Purple'];

export default function ColorBar() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const changeColor = (color) => {
    document.body.style.backgroundColor=color;
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-4">
      <h2 className="text-center mb-2 text-lg font-semibold">
        Selected Color: <span className="text-gray-800">{selectedColor}</span>
      </h2>
      <div className="flex space-x-2">
        {colors.map((color) => (
          <button
            key={color}
            className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            onClick={() => {
              setSelectedColor(color);
              changeColor(color);
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
