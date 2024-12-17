import { useEffect } from 'react';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <h1>Hello</h1>
  );
};

export default AppRoute;
