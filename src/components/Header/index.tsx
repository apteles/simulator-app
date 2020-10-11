import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import useStyles from './styles';

const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <AppBar position="relative">
      <Grid container className={styles.wrapper} justify="center">
        <HomeWorkIcon className={styles.logo} />
        <Typography variant="h3">Simulator</Typography>
      </Grid>
    </AppBar>
  );
};

export default Header;
