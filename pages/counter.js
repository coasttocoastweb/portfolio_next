// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const countColor = count > 0 ? 'text-green-500' : 'text-red-500';
  //const countColor = count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-neutral-500';

  return (
    <div>
      <h2 className={`${countColor} font-bold text-2xl mb-2`}>Counter: {count}</h2>
      <button className="bg-black-500 text-white px-4 py-2 rounded mr-2" onClick={handleIncrement}>+</button>
      <button className="bg-black-500 text-white px-4 py-2 rounded mr-2"  onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
