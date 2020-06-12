import React, { useContext } from 'react';
import CountUp from 'react-countup';

import {Typography, Box, Paper} from '@material-ui/core';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2); 

    return (
        <>
        <Box p={0} m={1}>
            <div className='balanceBox'>
            <Typography variant='h7' className='defaultFont'>
                Balance
            </Typography>                
                <Typography variant='h3' className='defaultFont'>
                <CountUp
                    start={0}
                    end={total}
                    duration={2.00}
                    separator=","
                    decimals={2}
                    decimal="."
                    prefix="$" />
                </Typography> 
            </div>
        </Box> 
        </>
    )
}

export default Balance;
