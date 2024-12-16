import { useEffect } from 'react';

import './scss/index.scss';

const App = () => {
  useEffect(() => {
    const city = 'New York';
    console.log('a -- ', city);

  }, []);

  return (
    <>
      <h1>Welcome</h1>
    </>
  );
};

export default App;
