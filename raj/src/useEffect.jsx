import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Run once when component mounts
  useEffect(() => {
    console.log('Counter component mounted ✅');
  }, []);

  // Run every time count changes
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>useEffect in Separate Component</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
