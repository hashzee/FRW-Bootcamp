import React, {useContext} from 'react';

import CountUp from 'react-countup';

import { Doughnut } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';

const DoughnutChart = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    
    const income = (amounts.filter(item => item>0).reduce((acc,item) => (acc += item),0))*1;
    const expense  = (amounts.filter(item => item<0).reduce((acc,item) => (acc += item),0)*-1)*1;
    const balance = income - expense;



    const doughChart = (
        income ? (
            <Doughnut data={{
                labels: ['Income','Expense','Balance'],

                datasets: [{
                    data: [income, expense, balance],
                    backgroundColor: ['rgb(0,153,0)', 'rgb(153,0,0)', 'rgb(0,0,153)'],
                    hoverBackgroundColor: ['rgba(0,153,0,0.6)', 'rgba(153,0,0,0.6)', 'rgba(0,0,153,0.6)']
                }],

            }} legend={{
                    display: true,
                    position: 'left',
                    fullWidth: false,
                    reverse: false,
                }}
        />) : null
    );

    return (doughChart);
}

export default DoughnutChart;