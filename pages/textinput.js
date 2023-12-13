import React, { useState } from 'react';

const CombinedComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [updatedText, setUpdatedText] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdateClick = () => {
    // Update the state with the typed text
    setUpdatedText(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mb-2"
      />
      <button
        className="bg-black-500 text-white px-4 py-2 rounded"
        onClick={handleUpdateClick}
      >
        Update
      </button>
      <p>Typed Text: {inputValue}</p>
      <p>Updated Text: {updatedText}</p>
    </div>
  );
};

export default CombinedComponent;
