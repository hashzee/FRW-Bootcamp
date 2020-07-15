import React, {useState,  useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container} from '@material-ui/core';
import Header from './Components/Header';
import Products from './Components/Products';
import {GlobalProvider} from './context/GlobalState';


import './App.css';


function App(){
  var cat = 'all';
  const [products, setProducts] = useState({});

  //const products = [];


  useEffect(() => {
      let data ='';
      const fetchMyData = async () => {
          try{
              const response = await fetch("https://fakestoreapi.com/products");
              data = await response.json(); // convert to json
              setProducts(data);
          }
          catch(error){
              console.log(error);
          }
      };

      fetchMyData();
  }, []);


  return ( 
      <GlobalProvider>
        <div className="App">
          <div className='overlay'>
          <Container maxWidth="lg">
            
            <BrowserRouter>
            <Header />         
              <Routes>
                <Route exact path="/" element={<Products category={cat} products={products}/>} />
                <Route path="men" element={<Products category='men clothing' products={products}/>} />
                <Route path="women" element={<Products category='women clothing' products={products}/>} />
                <Route path="jewelery" element={<Products category='jewelery' products={products}/>} />
                <Route path="electronics" element={<Products category='electronics' products={products}/>} />
              </Routes>          
              </BrowserRouter>
          </Container>
          </div>
        </div>
      </GlobalProvider>
  );
}

export default App;
