import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import '@scss/index.scss';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import MV from '@page/mv/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mv" element={<MV />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoute;
