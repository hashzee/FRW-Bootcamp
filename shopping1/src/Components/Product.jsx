import React, {useContext} from 'react'
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core/';
import styles from './Product.module.css';
import AddCartIcon from '@material-ui/icons/AddShoppingCart';
import ViewIcon from '@material-ui/icons/Visibility';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 300,
  },

  grid:{
      border:'2px solid black',
      maxHeight:'500px',
  },
  avatarRoot: {
    display: 'flex',
    position:'relative',
    left: '35%',
    bottom:'10px',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  black: {
    color: '#fff',
    backgroundColor: '#333',
    cursor:'pointer',
    transform:'scale(1)',
    transition:'ease 1s',
    '&:hover': {
      backgroundColor: '#52d6d3',
      transform:'scale(1.3)',
      transition:'ease 1s',
   },
  },  
}));

function Product({info}) {
    const classes = useStyles();
    const {add2Cart, addMore, cart} = useContext(GlobalContext);


    function cartHasItem(id)
    {
      console.log(cart);
      let res = !!cart.find(items => items.id === id);
      //alert(res);
      return res;
    }

    //console.log(cart);
    return (
        <div className={styles.card}>
            <div className={styles.cardPrice}>Only ${info.price}</div>
            <div className={styles.cardMedia}>
                <img src={info.image} alt={info.title}/>
            </div>
            <div className={`${classes.avatarRoot} ${styles.cardActions}`}>
              <Avatar className={classes.black}>
                <AddCartIcon onClick={(e) => {(cartHasItem(info.id)?addMore({id:info.id}):add2Cart({id:info.id,qty:1}))}} />
              </Avatar>
              <Avatar className={classes.black} >
                <ViewIcon />
              </Avatar>
            </div>
            <div className={styles.cardBody}>
                {info.title}
            </div>
        </div>
    );
  }

export default Product
