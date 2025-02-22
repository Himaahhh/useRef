import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref to the input element
  const inputRef = useRef(null);
  // Function to fo
  // focus the input element
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus Example</h1>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />

      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default FocusInput;