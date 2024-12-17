import { useEffect } from 'react';

interface IProps {}
interface IState {}

const Dashboard = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>Dashboard Page</h1>
    </>
  );
};

export default Dashboard;
