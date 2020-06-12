import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchStats } from '../../api';

const url = 'https://corona.lmao.ninja/v2/countries';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

class StatsTable extends React.Component{
    state = {
        data: [],
    }

    async componentDidMount(){
        const fetchedStats = await fetchStats();
        this.setState({data: fetchedStats});
    }

    render() {

        const data = this.state.data;
        console.log(data);
        
        return (
            <div>
                <h2>Data</h2>
              

                
             <TableContainer component={Paper}>
            
                 <Table  size="small" aria-label="a dense table">
                     <TableHead>
                     <TableRow>
                         <TableCell>Country</TableCell>
                         <TableCell align="right">New Cases</TableCell>
                         <TableCell align="right">New Deaths</TableCell>
                         <TableCell align="right">New Recovered</TableCell>
                         <TableCell align="right">Cases</TableCell>
                         <TableCell align="right">Deaths</TableCell>
                         <TableCell align="right">Recovered</TableCell>
                         <TableCell align="right">Critical</TableCell>
                         <TableCell align="right">Active</TableCell>
                         <TableCell align="right">Cases/Million</TableCell>
                         <TableCell align="right">Deaths/Million</TableCell>
                     </TableRow>
                     </TableHead>
                     <TableBody>
                     {data.map((row) => (
                         <TableRow key={row.country}>
                         <TableCell component="th" scope="row">
                             {row.country}
                         </TableCell>
                            <TableCell align="right">+{row.todayCases.toLocaleString()}</TableCell>
                            <TableCell align="right">+{row.todayDeaths.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.todayRecovered.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.cases.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.deaths.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.recovered.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.critical.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.active.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.casesPerOneMillion.toLocaleString()}</TableCell>
                            <TableCell align="right">{row.deathsPerOneMillion.toLocaleString()}</TableCell>
                         </TableRow>
                     ))}
                     </TableBody>
                 </Table>
                 </TableContainer>
                 </div>                
        )
    }
}

export default StatsTable;