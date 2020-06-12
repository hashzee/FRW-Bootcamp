import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
//const urlPop = 'https://corona-api.com/countries';
const countryInfoURL = 'https://corona.lmao.ninja/v2/countries';


export const fetchData = async (country) => {
    let changeableURL = url;
    let newPops, newCases, newDeaths = '0';
    let moreInfo = '';

    if(country){
        //const { getCode} = require('country-list');
        changeableURL = `${url}/countries/${country}`;
        //isoCode = getCode(country);
        //console.log(isoCode);
    }

    try {
        if(country){
            const {data} = await axios.get(`${countryInfoURL}/${country}`);
            newCases = data.todayCases;
            newDeaths = data.todayDeaths;
            newPops = data.population;
            moreInfo = data;       
        }
        
        const { data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(changeableURL);      
        return {confirmed,recovered,deaths,lastUpdate,newPops,newCases,newDeaths,moreInfo}

    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        //console.log(data);
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries = async () =>{
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);

    } catch (error) {
        
    }
}

export const fetchStats = async () => {

    try {
        const data = await axios.get(countryInfoURL);      
        //console.log(data.data);
        return data.data;

    } catch (error) {
        
    }
}
