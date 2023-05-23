import * as React from 'react';
import Typography from '@mui/material/Typography';
import Products from '../Products';
import { useSelector } from 'react-redux';

export default function ActiveCategory() {

  let categories = useSelector((currentState) => currentState.categories)

  return (
    <>
      <Typography variant="h1" noWrap component="div">
        {categories.activeCategory}
      </Typography>
      <Products />

    </>
  )
}