import React, {useState, useContext} from 'react';
import {Typography, Box, Paper, TextField, Button, ButtonGroup} from '@material-ui/core';

import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            text,
            amount: parseFloat(amount)
        }
        setText('');
        setAmount('');
        addTransaction(newTransaction);
    }

    return (
        <>
            <form>
                <Box m={2} mt={4}>
                <Typography variant='h7'>
                    Add New Transation 
                </Typography>
                <hr className='mainHr'/>
                <TextField
                    required
                    id="descr"
                    label="Description"
                    defaultValue=""
                    variant="filled"
                    className="inputField"
                    size="small"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Box mt={2} mb={2}><small>Negative is Expense, Positive is Income</small></Box>
                <TextField
                    required
                    id="amt"
                    label="Amount"
                    variant="filled"
                    className="inputField"
                    size="small"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />         
                </Box>

                <Box m={4} mt={3} textAlign="center">
                    <Button className="incomeButton" onClick={onSubmit}>Add Transaction</Button>
                </Box>
            </form>
        </>
    )
}

export default AddTransaction;