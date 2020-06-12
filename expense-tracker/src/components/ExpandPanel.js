import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TransactionsList from './TransactionsList';
import DoughnutChart from './DoughnutChart';

import styles from './ExpandPanel.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#FFFFFF',
  },
  headingBG:{
    backgroundColor: '#08284d',
  },
  white:{
    color: '#FFFFFF',
  },  
}));

const ExpandPanel = () => {
  const classes = useStyles();

  return (
    <>
    <Box m={2}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.white} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.headingBG}
        >
          <Typography className={(classes.heading)}>Transacitons History</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TransactionsList />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
    <Box m={2}>
    <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.white} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.headingBG}
        >
          <Typography className={(classes.heading)}>Graph</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DoughnutChart />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>    
    </>
  );
}

export default ExpandPanel;