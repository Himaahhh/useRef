import React, { useRef } from 'react'

function Visibility() {
    const divRef = useRef(null);
    const toggle = () => {
        if (divRef.current) {
            divRef.current.style.display =
                divRef.current.style.display === "none" ? "block" : "none";
        }
    };
    return (
        <div>
        <h2>Toggle Visibility</h2>
        <button
          onClick={toggle}>
          Hide the text
        </button>
        <div ref={divRef}>
         The text is now hidden
        </div>
      </div>
    );
}

export default Visibility