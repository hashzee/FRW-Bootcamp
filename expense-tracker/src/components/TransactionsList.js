import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';

import Transaction from './Transaction';
import styles from './TransactionsList.module.css';
import { GlobalContext } from '../context/GlobalState';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },

}));


export default function InteractiveList() {
  const classes = useStyles();
  const {transactions} = useContext(GlobalContext);

  console.log(transactions);

  return (
    <div className={classes.root}>

        <Grid item spacing={1}>
          <div className={classes.demo}>
            <List dense={true}>
              {transactions.map(transaction => (<Transaction transaction={transaction}/>))}                             
            </List>
          </div>
        </Grid>
 
    </div>
  );
}
