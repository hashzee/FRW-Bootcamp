import React, {useContext } from 'react';
import {Grid, AppBar, Toolbar, IconButton, Typography, Button, Link} from '@material-ui/core';
import {Link as RLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo_transparent.png';
import { GlobalContext } from '../context/GlobalState';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    AppBar:{
      backgroundColor:'transparent',
      boxShadow:'none',
      color:'#FFFFFF',
      marginBottom:'20px !important',
    },
    logo:{
      width:'100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'left',
    },
  
    link:{
      color: '#FFFFFF',
      textDecoration:'none',
      minWidth:'160px',
      margin:'15px',
      cursor:'pointer',
      '&:hover': {
        textDecoration:'none',
     },
    }
  
  
  }));
  
function Header() {
    const classes = useStyles();
    const {cartItems} = useContext(GlobalContext);
    return (
        <>
            <Grid container justify="center">
            <Grid item xs={12} md={5}>
              <img src={logo} alt='Buyoo ! Meeting Expectations... ' className={classes.logo}/>
            </Grid>
            </Grid>
            <AppBar position="static" className={classes.AppBar} elevation={0}>
                <Toolbar style={{ alignItems: "center", justifyContent: "center" }}>         
                    <nav>
                    <Link component={RLink} variant="button" color="textPrimary" href="#" to='/' className={classes.link}>
                        All
                    </Link>              
                    <Link component={RLink} variant="button" color="textPrimary" href="#" to="/men" className={classes.link}>
                        His Cloths
                    </Link>
                    <Link component={RLink} variant="button" color="textPrimary" href="#" to="/women" className={classes.link}>
                        Her Cloths
                    </Link>
                    <Link component={RLink} variant="button" color="textPrimary" href="#" to="/jewelery" className={classes.link}>
                        Jewelery
                    </Link>
                    <Link component={RLink} variant="button" color="textPrimary" href="#" to="/electronics" className={classes.link}>
                        Electronics
                    </Link>                                       
                    </nav>          
                </Toolbar>
            </AppBar>            
        </>
    )
}

export default Header
