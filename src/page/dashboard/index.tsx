import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  paddingTop: `${Size.appTop}rem`,
  paddingBottom: `${Size.appStatus}rem`,
});

const DStack = styled(Stack)({});

const DBox = styled(Box)({});

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Button variant="contained" color="primary">追求技术之巅，探索宇宙之秘...</Button>
      <Button variant="contained" color="secondary">诗为她而作，泪为你而流...</Button>
      <Button variant="contained" color="info">每天醒来为了什么</Button>
      <Button variant="contained" color="warning">伐木造船，驶向有你的彼岸...</Button>
      <Button variant="contained" color="error">行行走走忙忙匆匆挤挤</Button>
      <Button variant="contained" color="black">进进出出影影形形觅觅...</Button>
      <Button variant="dashed" color="primary">追求技术之巅，探索宇宙之秘...</Button>
      <Button variant="dashed" color="secondary">诗为她而作，泪为你而流...</Button>
      <Button variant="dashed" color="info">每天醒来为了什么</Button>
      <Button variant="dashed" color="warning">伐木造船，驶向有你的彼岸...</Button>
      <Button variant="dashed" color="error">行行走走忙忙匆匆挤挤</Button>
      <Button variant="dashed" color="black">进进出出影影形形觅觅...</Button>
      <Button variant="outlined" color="primary">追求技术之巅，探索宇宙之秘...</Button>
      <Button variant="outlined" color="secondary">诗为她而作，泪为你而流...</Button>
      <Button variant="outlined" color="info">每天醒来为了什么</Button>
      <Button variant="outlined" color="warning">伐木造船，驶向有你的彼岸...</Button>
      <Button variant="outlined" color="error">行行走走忙忙匆匆挤挤</Button>
      <Button variant="outlined" color="black">进进出出影影形形觅觅...</Button>
      <Button color="primary">追求技术之巅，探索宇宙之秘...</Button>
      <Button color="secondary">诗为她而作，泪为你而流...</Button>
      <Button color="info">每天醒来为了什么</Button>
      <Button color="warning">伐木造船，驶向有你的彼岸...</Button>
      <Button color="error">行行走走忙忙匆匆挤挤</Button>
    </DPaper>
  );
};

export default Dashboard;
