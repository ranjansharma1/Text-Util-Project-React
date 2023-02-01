import React, { useState } from 'react';

const ColorChangePage = () => {
  const [colorMode, setColorMode] = useState('blue');

  const handleColorChange = (newColor) => {
    setColorMode(newColor);
  };

  return (
    <div>
      <div style={{ backgroundColor: colorMode }}>
        <h1 style={{ color: 'white' }}>Hello World!</h1>
      </div>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
      <button onClick={() => handleColorChange('red')}>Red</button>
    </div>
  );
};

export default ColorChangePage;
