import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGoToAbout = () => {
    navigate('/about?id=1', { state: { user: 'Raj' } });
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleGoToAbout}>Go to About (with user Raj)</button>
    </div>
  );
}

export default Home;
