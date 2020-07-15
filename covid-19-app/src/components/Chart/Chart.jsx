import React, {useState, useEffect} from 'react';
import {Box, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';


import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length ? (
            <Line height={220} data={{
                labels: dailyData.map(({date})=>date),
                datasets: [{
                    data: dailyData.map(({confirmed})=> confirmed),
                    label: 'Infected',
                    borderColor: '#0083B0',
                    backgroundColor: 'rgba(0,180,219,0.5)',
                    fill: true,
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    borderColor: '#ff4b1f',
                    backgroundColor: 'rgba(255,75,31,0.5)',
                    fill:true,
                }],
            }}
        />) : null
    );

    const barChart = (
        data.confirmed ? (
            //console.log(data.confirmed.value)
             <Bar height={190} 
                data = {{
                    labels: ['Infected','Recovered','Deaths','Active'], 
                    datasets: [{
                        label: 'People',
                        backgroundColor:['#0083B0','#56ab2f','#ff4b1f','#EDDE5D'], 
                        data:[data.confirmed.value, data.recovered.value, data.deaths.value,data.confirmed.value- data.recovered.value+data.deaths.value],
                    }],
                    
                }}
                
                options = {{
                    legend: {display:false},
                    title: {display:true, text: `${country} Current Stats`},
                }}
             />
        ) : null
    );

    const moreStats = (
        data.newPops ? (
            <Grid container spacing={3} justify="left">
                <Grid item component={Box} className={styles.stats}>
                  <p>
                    <span>New Cases</span>
                    <CountUp start={0} end={data.newCases} duration={2.5} separator="," />
                  </p>
                </Grid> 
                <Grid item component={Box} className={styles.stats}>
                  <p>
                  <span>New Deaths</span>
                    <CountUp start={0} end={data.newDeaths} duration={2.5} separator="," />
                  </p>
                </Grid>  
                <Grid item component={Box} className={styles.stats}>
                  <p>
                  <span>Cases/Million</span>
                    <CountUp start={0} end={data.moreInfo.casesPerOneMillion} duration={2.5} separator="," />
                  </p>
                </Grid> 
                <Grid item component={Box} className={styles.stats}>
                  <p>
                  <span>Deaths/Million</span>
                    <CountUp start={0} end={data.moreInfo.deathsPerOneMillion} duration={2.5} separator="," />
                  </p>
                </Grid>                                                                
            </Grid>
        ) : null
    );

    return (
        <div>
            <div className={styles.container}>
                {country ? moreStats : ''}
            </div>
            <div className={styles.container}>
                {country ? barChart : lineChart}
            </div>
        </div>
    )
};

export default Chart;