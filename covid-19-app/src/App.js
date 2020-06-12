import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { TopBar,  LeftPane, RightPane, EnhancedTable } from './components';

import styles from './App.module.css';
import { fetchData } from './api';



class App extends React.Component{

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        if(country === 'Korea, South'){
            country = 'South Korea';
        }
        const fetchedData = await fetchData(country);
        
        this.setState({data: fetchedData, country: country});
    }

 
    render() {

        const {data, country} = this.state;

        return (
            <React.Fragment>
            <TopBar title='COVID-19 Tracker by Zeeshan Hashmi'/>
            <Container maxWidth="lg" className={styles.container}>
              
                <Grid container spacing={3} >
                    <LeftPane title="World Stats" handleCountryChange = {this.handleCountryChange} data={data} country={country}/>
                    <RightPane title="" data={data} country={country}/>
                    {/* <StatsTable /> */}
                    <h3 id='statsTable'>Countries Stats table</h3>
                    <EnhancedTable />
                </Grid>
            </Container>
            </React.Fragment>

        )
    }
}

export default App;