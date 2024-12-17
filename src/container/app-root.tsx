import { useEffect, ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import Theme from '@theme/index';
import AppDial from './app-dial';

interface IProps {
  children: ReactNode,
}
interface IState {}

const App = (props: IProps, state: IState) => {
  const { children } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <>{children}</>
        <AppDial />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default observer(App);
