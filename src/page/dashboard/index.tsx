import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';

interface IProps {}
interface IState {}

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>Dashboard Page</h1>
      <NavLink to="/home">To Home</NavLink>
    </>
  );
};

export default Dashboard;
