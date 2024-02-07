import React from 'react';

function ClearButton({ onClear }) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="bg-red-400 hover:bg-red-500 text-white p-0.5 rounded-full absolute top-2 right-4 flex"
      style={{ border: 'none', outline: 'none' }}
    >
      <i className="material-icons text-xxl">clear</i>
    </button>
  );
}

export default ClearButton;