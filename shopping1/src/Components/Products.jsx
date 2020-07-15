import React, {useContext} from 'react';
import Product from './Product';

import {Grid} from '@material-ui/core/';


function Products({category, products}) {

    return (
        <>
            <Grid container spacing={3} justify="center">
            {

                (products.length>0 && category==='all')? products.map(product=>{
                    return(<Product key={product.id} info={product}/>)
                }):((products.length>0 && category!=='all')?products.filter(item => item.category==category).map(product=>{
                    return(<Product key={product.id} info={product}/>)
                }):<div className='loader'>Loading....</div>)}
            </Grid>
        </>
    )
}

export default Products
