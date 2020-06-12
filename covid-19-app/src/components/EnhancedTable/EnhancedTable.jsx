import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { fetchStats } from '../../api';
import styles from './EnhancedTable.module.css';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'country', numeric: false, disablePadding: false, label: 'Country' },
  { id: 'todayCases', numeric: false, disablePadding: false, label: 'New Cases' },
  { id: 'todayDeaths', numeric: false, disablePadding: false, label: 'New Deaths' },
  { id: 'todayRecovered', numeric: true, disablePadding: false, label: 'New Recovered' },
  { id: 'cases', numeric: true, disablePadding: false, label: 'Infected' },
  { id: 'deaths', numeric: true, disablePadding: false, label: 'Deaths' },
  { id: 'recovered', numeric: true, disablePadding: false, label: 'Recovered' },
  { id: 'critical', numeric: true, disablePadding: false, label: 'Critical' },
  { id: 'active', numeric: true, disablePadding: false, label: 'Active' },
  { id: 'casesPerOneMillion', numeric: true, disablePadding: false, label: 'Cases/Million' },
  { id: 'deathsPerOneMillion', numeric: true, disablePadding: false, label: 'Deaths/Million' },
];



function EnhancedTableHead(props) {
  const { classes, order, orderBy,  onRequestSort } = props;

  
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow  className={styles.tableHead}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            className={styles.tableHeadCell}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '99%',
    marginBottom: theme.spacing(2),
  },

  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const [dataRows, setDataRows] = React.useState([]);
  const classes = useStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('todayCases');
 

  React.useEffect(() => {
    if (!dataRows.length) {
        getDataRows();
    }
  },);  

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };



  const getDataRows = async () => {
    const fetchedStats = await fetchStats();
    setDataRows(fetchedStats);
  };

  //console.log(dataRows);

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>

        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='medium'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(dataRows, getComparator(order, orderBy))
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.country}
                    >
                      <TableCell component="th" id={labelId} scope="row" >
                        {row.country}
                      </TableCell>
                      <TableCell align="right" className={`${row.todayCases > 0 ? styles.danger1 : ""}`}>+{row.todayCases.toLocaleString()}</TableCell>
                      <TableCell align="right" className={`${row.todayDeaths > 0 ? styles.newDeaths : ""}`}>+{row.todayDeaths.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.todayRecovered.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.cases.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.deaths.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.recovered.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.critical.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.active.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.casesPerOneMillion.toLocaleString()}</TableCell>
                      <TableCell align="right">{row.deathsPerOneMillion.toLocaleString()}</TableCell>                      

                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
