import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Jumbotron from './components/Jumbotron'
import ThingsToLearn from './components/ThingsToLearn'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="md"  px={0}>  
          <NavBar title='React & Material UI'/>
          <Jumbotron title="Zeeshan Hashmi"/>
          <Box textAlign="center" m={2}>
            <Typography component="h2" variant="h4">
                What we will learn ?
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <ThingsToLearn 
                title="React Js" 
                descr="React is an open-source JavaScript library for building user interfaces."
                image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                imageTitle="React Js"
                link="https://reactjs.org/"
            />

            <ThingsToLearn 
                title="Material UI" 
                descr="Material Design is a design language that Google developed in 2014."
                image="https://material-ui.com/static/logo.png"
                imageTitle="Material UI"
                link="https://material-ui.com"
            />  
            <ThingsToLearn 
                title="Gatsby" 
                descr="Gatsby is a React-based, GraphQL powered, static site generator."
                image="https://www.gatsbyjs.org/static/d4ed2bdc92d5aa7991670a394c910cc8/a3df1/vertical-treatment.jpg"
                imageTitle="Gatsby"
                link="https://www.gatsbyjs.org/"
            />             
            <ThingsToLearn 
                title="Contentful" 
                descr="It’s the modern way to manage content. Control all content from a single hub."
                image="https://seeklogo.com/images/C/contentful-logo-C395C545BF-seeklogo.com.png"
                imageTitle="Contentful"
                link="https://www.contentful.com/"
            />              

            
             
          </Grid>       
        </Container>

      </div>
    )
  }
}

export default App;
