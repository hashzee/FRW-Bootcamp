import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className='styles.contaier'>
           {/*<Grid container spacing={1} justify="center">*/}
           
                <Grid item component={Card} className={styles.CardGrid}>
                    <CardContent className={styles.infected}>
                        <Typography color="textSecondary" gutterBottom className={styles.typography}>
                            Infected
                        </Typography>
                        <Typography variant="h4" className={styles.typography}>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.typography}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" className={styles.typography}>
                            Number of Total Cases COVID-19
                        </Typography>                        
                    </CardContent>
                </Grid>
               
                <Grid item component={Card} className={styles.CardGrid}>
                    <CardContent className={styles.recovered}>
                        <Typography color="textSecondary" gutterBottom className={styles.typography}>
                            Recovered
                        </Typography>
                        <Typography variant="h4" className={styles.typography}>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.typography}> 
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" className={styles.typography}>
                            Number of Recoveries COVID-19
                        </Typography>                        
                    </CardContent>
                </Grid>   
                <Grid item component={Card} className={styles.CardGrid}>
                    <CardContent className={styles.deaths}>
                        <Typography color="textSecondary" gutterBottom className={styles.typography}>
                            Deaths
                        </Typography>
                        <Typography variant="h4" className={styles.typography}>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.typography}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" className={styles.typography}>
                            Number of Deaths COVID-19
                        </Typography>                        
                    </CardContent>
                </Grid> 
                <Grid item component={Card} className={styles.CardGrid}>
                    <CardContent className={styles.activeCases}>
                        <Typography color="textSecondary" gutterBottom className={styles.typography}>
                            Active Cases
                        </Typography>
                        <Typography variant="h4" className={styles.typography}>
                            <CountUp start={0} end={confirmed.value-(recovered.value+deaths.value)} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" className={styles.typography}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" className={styles.typography}>
                            Current Active Cases
                        </Typography>                        
                    </CardContent>
                </Grid>                                               
           {/*</Grid>*/}         

        </div>
    )
}

export default Cards;