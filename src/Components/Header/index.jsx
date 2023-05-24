import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static" sx={{ zIndex: 10000}}>
        <Toolbar sx={{ display: 'flex', alignContent: "space-between"}}>
          <Typography variant="h6" component="div">
            Storefront
          </Typography>
          <Button color="inherit">Cart ()</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}