import React, { useState } from 'react';
import './App.css';
const App2 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLigth = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className={`container light-${isOn ? 'on' : 'off'}`}>
      <p>this ligth is {isOn ? 'on' : 'off'}</p>
      <button onClick={toggleLigth}>turn {isOn ? 'off' : 'on'}</button>
    </div>
  );
};

export default App2;
