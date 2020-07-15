import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TransactionsList.module.css';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const {delTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return(
        <>
            <ListItem key={transaction.key} className={(transaction.amount < 0 ? styles.expense:styles.income)}>
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={() => delTransaction(transaction.id)}/>
                </IconButton>
                </ListItemSecondaryAction>
                <ListItemText primary={sign+'$'+Math.abs(transaction.amount)} secondary={transaction.text}/>
            </ListItem>
        </>
    )
}

export default Transaction;
