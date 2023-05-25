import { useState, React } from 'react';
import { Drawer, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useDispatch();
  let cart = useSelector((currentState) => currentState.cart);


  const handleClick = (item) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item
    })
  }

  return (
    <>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Box sx={{ width: 345, marginTop: 10}}>
          {cart.totalCount ? (
            <List>
              {cart.inCart.map(item => (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleClick(item)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                  key={item.name}
                >
                  <ListItemText
                    primary={`x${item.count} ${item.name}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="h5">Cart is empty</Typography>
          )
          }
          </Box>
      </Drawer >
      <IconButton aria-label="cart" onClick={() => setCartOpen(true)}>
        <StyledBadge badgeContent={cart.totalCount} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </>
  );
}