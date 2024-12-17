import { useEffect, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IProps {
  children: ReactNode,
}
interface IState {}

const DPaper = styled(Paper)({});

const AppPortal = (props: IProps) => {
  const { children }= props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>{children}</DPaper>
  );
};

export default observer(AppPortal);
