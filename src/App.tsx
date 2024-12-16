import { useEffect } from 'react';

import './scss/index.scss';

const App = () => {
  useEffect(() => {
    // --- city ---
    const city = 'New York';
    console.log('city -- ', city);
  }, []);

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
};

export default App;
