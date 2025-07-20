
import React from 'react';
import useToggle from './useToggle';

function ToggleComponent() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>

      {isVisible && <p>Hello! I am now visible 👋</p>}
    </div>
  );
}

export default ToggleComponent;
