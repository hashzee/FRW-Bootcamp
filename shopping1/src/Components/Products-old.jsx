import React, {useState, useEffect} from 'react';
import Product from './Product';
import {Grid} from '@material-ui/core/';


function Products({category}) {
 
    let url ="https://fakestoreapi.com/products";
    
    if(category === 'all'){
        url ="https://fakestoreapi.com/products";
    }
    else {
        url ="https://fakestoreapi.com/products/category/"+category;
    }


    const [products, setProducts] = useState({});
    
    useEffect(() => {
      getData(url);
  
      async function getData(url) {
        const response = await fetch(url);
        let data = await response.json(); // convert to json
         
        setProducts(data);
        //data.map(dt => {document.write(dt.id)});
      }
    }, [category]);    

    return (
        <>
            <Grid container spacing={3}>
            {(products.length>0)? products.map(product=>{
                return(
                                                                   
                        <Product key={product.id} info={product}/>
                    
                )
            }):'Loading...'}
            </Grid>
        </>
    )
}

export default Products
