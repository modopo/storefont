import * as React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useSelector } from 'react-redux';
import ProductCard from './productCard';

export default function Products() {

  let activeCategory = useSelector((currentState) => currentState.categories.activeCategory)
  let productsToDisplay = useSelector((currentState) => currentState.products.productsToDisplay)
  let allProducts = useSelector((currentState) => currentState.products.allProducts);

  console.log('products to display: ', productsToDisplay);
  console.log('all products status: ', allProducts);

  return (
    <Grid container justifyContent="center" spacing={3} rowSpacing={1}>
      {activeCategory ? (
        productsToDisplay.map(product => {
          if (product.quantity > 0) {
            return (<ProductCard product={product} key={product.name} />)
          }
          return (<></>)
        })
      ) : (
        <Typography variant="h1">
          Pick a category!
        </Typography>
      )
      }
    </Grid>
  );
}