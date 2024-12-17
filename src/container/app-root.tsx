import { useEffect } from 'react';

interface IProps {}
interface IState {}

const App = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <h1>Root</h1>
  );
};

export default App;
