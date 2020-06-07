import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bgreen: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
    },
  }));

const NavBar = ({title}) => {
    const classes = useStyles();
    return(
        <div>
        <AppBar position="static" className="NavBar">
            <Toolbar>
                <Avatar className={classes.bgreen}>ZH</Avatar>
                <Typography variant="title" color="inherit" className="m2">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;