import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import styles from './TopBar.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  function handleClick() {
    //window.scrollTo(0, 500);
    window.location.hash = "#statsTable";
  }

const TopBar = ({title}) =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static" className={styles.topBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                {title}
                </Typography>
                    <Button color="inherit" onClick={handleClick}>Countries Stats Table</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar;
