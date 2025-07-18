import React from 'react';
import { useLocation } from 'react-router-dom';

function Para() {
  const location = useLocation();

  // Parse query params from location.search
  const searchParams = new URLSearchParams(location.search);
  const queryId = searchParams.get('id'); // Example: /about?id=1

  return (
    <>
      <p>Path: {location.pathname}</p>
      <p>Query String: {location.search}</p>
      <p>Query Param (id): {queryId || 'None'}</p>
      <p>State user: {location.state?.user || 'No user found'}</p>
    </>
  );
}

export default Para;
