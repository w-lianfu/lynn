import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({});

const DStack = styled(Stack)({});

const DBox = styled(Box)({});

const AppLoading = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DStack>
        <Typography variant="body1">Hello</Typography>
      </DStack>
    </DPaper>
  );
};

export default observer(AppLoading);

