import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Cards from '../Cards/Cards';




export default function RightPane(props) {

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3}>
        <Typography variant="h6" gutterBottom>
          {props.title}
        </Typography>
        <Divider />
        <Cards data={props.data}/>
      </Paper>
    </Grid>
  );
}