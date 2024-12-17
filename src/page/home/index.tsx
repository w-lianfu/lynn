import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate, NavLink } from 'react-router';

interface IProps {}
interface IState {}

const Home = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <NavLink to="/">To Dashboard</NavLink>
    </>
  );
};

export default observer(Home);
