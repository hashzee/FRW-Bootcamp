import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    backgroundImage: 'url(https://source.unsplash.com/950x300/?road,highway)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  jumbotronContent: {
    position: 'relative',
    padding: theme.spacing(6),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Jumbotron(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.jumbotron} style={{ backgroundImage: `url(https://source.unsplash.com/950x300/?freelancing,freelancer)` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="https://source.unsplash.com/950x300/?freelancing,freelancer" alt="Road to 4IR" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.jumbotronContent}>
            <Typography component="h4" variant="h4" color="inherit" gutterBottom>
              4IR Bootcamp 2020
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Free Online Learn to Earn Fasttrack Bootcamp to Learn Freelancing and do Remote Work in the COVID-19 Economic Environment
            </Typography>
            <Link variant="subtitle1" href="https://panacloud.github.io/bootcamp-2020/">
              Read More....
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Jumbotron.propTypes = {
  post: PropTypes.object,
};