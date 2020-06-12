import React, {useState, useContext} from 'react';
import {Typography, Box, Paper, TextField, Button, ButtonGroup} from '@material-ui/core';

import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const [text, setText] = useState('');
    const [textError, setTextError] = useState(false);
    const [amount, setAmount] = useState('');
    const [amtError, setAmtError] = useState(false);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {

        e.preventDefault();
        
        if(text.length < 3){
            setTextError(true);
        }
        else{
            setTextError(false);
            if(amount > 0){
                setAmtError(false);
                const newTransaction = {
                    id: new Date().getTime(),
                    text,
                    amount: parseFloat(amount)
                }
                setText('');
                setAmount('');
                addTransaction(newTransaction);
            }
            else
            {
                setAmtError(true);
            }
        }
    }

    const onExpSubmit = e => {
        e.preventDefault();
        if(text.length < 3){
            setTextError(true);
        }
        else
        {
            setTextError(false);
            if(amount > 0){
                setAmtError(false);
                const newTransaction = {
                    id: new Date().getTime(),
                    text,
                    amount: parseFloat(-amount)
                }
                setText('');
                setAmount('');
                addTransaction(newTransaction);
            }
            else{
                setAmtError(true);
            }
        }
    }
    
    //const error = (parseFloat(amount) < 1);

    return (
        <>
            <form>
                <Box m={2} mt={4}>
                <Typography variant='h7'>
                    Add New Transation
                </Typography>
                <hr className='mainHr'/>
                <TextField
                    required={true}
                    id="descr"
                    label="Description"
                    defaultValue=""
                    variant="filled"
                    className="inputField"
                    size="small"
                    value={text}
                    error={textError}
                    helperText={textError==true ? 'Minimum 3 letters required':''}
                    onChange={(e) => setText(e.target.value)}
                />
                <hr className='mainHr'/>
                <TextField
                    required
                    id="amt"
                    label="Amount"
                    variant="filled"
                    className="inputField"
                    size="small"
                    type="number"
                    value={amount}
                    error={amtError}
                    helperText={amtError==true ? 'Minimum $1 required':''}
                    onChange={(e) => setAmount(e.target.value)}
                    />         
                </Box>

                <Box m={0} mt={3} textAlign="center">
                    <Button className="incomeButton" onClick={onSubmit}>Add Income</Button>
                    <Button className="expenseButton" onClick={onExpSubmit}>Add Expense</Button>
                </Box>
            </form>
        </>
    )
}

export default AddTransaction;