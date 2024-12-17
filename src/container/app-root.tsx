import { useEffect, ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { observer } from 'mobx-react-lite';

import '@scss/index.scss';
import AppTheme from './app-theme';
import AppDial from './app-dial';
import AppLock from './app-lock';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import lock from './store/app-lock';

interface IProps {
  children: ReactNode,
}
interface IState {}

const App = (props: IProps, state: IState) => {
  const { children } = props;
  const { isLock } = lock;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <AppTheme>
        <AppTop />
        <AppStatus />
        <>{children}</>
        <AppDial />
        {isLock ? <AppLock /> : null}
      </AppTheme>
    </BrowserRouter>
  );
};

export default observer(App);
