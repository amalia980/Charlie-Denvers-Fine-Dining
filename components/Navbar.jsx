import * as React from 'react';
import Image from 'next/image';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import { CartContext } from '../context/CartContext';
import { useSelector } from 'react-redux';


import logo from "../public/assets/icons_logos/CD_diner-logo_for_black_bg.png";
import Cart from './cart';
  
  const drawerWidth = 540;
  const navItems = ['Home', 'About', 'Contact'];
  
const Navbar = (props) => {
  
  const quantity = useSelector(state => state.cart.quantity);

  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showIcon, setShowIcon] = React.useState(false);

  const { cartVisible, setCartVisible } = React.useContext(CartContext);

  React.useEffect(() => {
    // const width  = window.innerWidth || document.documentElement.clientWidth || 
    // document.body.clientWidth;
    // if (width === 500) {
    //   setShowIcon(true);
    // }
  }, []);

  const openCart = () => {
    setCartVisible(true);
  }
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} style={{ textAlign: 'center' }}>
      <Typography variant="h6" style={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <Button style={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const container = window !== undefined ? () => window().document.body : undefined;

  
  return (
    <>
      {cartVisible && <Cart />}
      <AppBar component="nav" style={{ backgroundColor: "black" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            
          <div>
          {showIcon && (
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          style={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          )
            }
            </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button style={{ color: '#fff' }} href="/">Home</Button>
            <Button style={{ color: '#fff' }}>book a table</Button>
            <Button style={{ width: "5.5rem" }}>
              <Image src={logo} />
            </Button>
            <Button style={{ color: '#fff' }} href="/Menu">Menu</Button>
            <Button style={{ color: '#fff' }}>order to home</Button>
          </div>

          <Box
          //</Toolbar>style={{ display: { xs: 'none', sm: 'block' } }}
          >
            <IconButton color="inherit" onClick={openCart}>
              <ShoppingCart />
              <div>{quantity}</div>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

        
        
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box style={{ marginTop: "4rem", width: "100%" }}>
        {children}
      </Box>
    </>
  )
};
  
  export default Navbar;