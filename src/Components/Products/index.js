import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useDispatch, useSelector } from 'react-redux';

export default function Products() {

  let activeCategory = useSelector((currentState) => currentState.categories.activeCategory)
  let productsToDisplay = useSelector((currentState) => currentState.products.productsToDisplay)
  let cart = useSelector((currentState) => currentState.cart);

  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: name
    })
  }

  console.log(cart);

  return (
    <Grid container justifyContent="center" spacing={1} rowSpacing={1}>
      {activeCategory ? (
        productsToDisplay.map(product => (
          <Card sx={{ maxWidth: 345 }} key={product.name}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/345x140"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => handleClick(product.name)}>
                Add to cart
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="h1">
          Pick a category!
        </Typography>
      )}
    </Grid>
  );
}