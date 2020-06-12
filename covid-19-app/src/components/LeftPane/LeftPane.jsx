import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chart from '../Chart/Chart';
import styles from './LeftPane.module.css';
import CountryPicker from '../CountryPicker/CountryPicker';


export default function LeftPane({title, handleCountryChange, data, country}) {

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h3" gutterBottom className={styles.typography}>
         COVID-19 Stats
      </Typography>
        <CountryPicker  handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country}/>
        
      <Divider />

    </Grid>
  );
}