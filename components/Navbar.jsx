
import * as React from 'react'
import Image from "next/Image"

import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'
import Call from '@material-ui/icons/Call'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

import styles from '../styles/Navbar.module.css'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'

import logo from "../public/assets/icons_logos/CD_diner-logo_for_black_bg.png"
import Footer from '../components/Footer'
import Cart from './cart'
  
  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];
  
  function Navbar(props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

  const { cart, cartVisible, setCartVisible } = useContext(CartContext) //cart state

    const openCart = () => {
      setCartVisible(true)
    }
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} style={{ textAlign: 'center' }}>
        <Typography variant="h6" style={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
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
        <AppBar component="nav" style={{backgroundColor: "black"}}>
          <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              //edge="start"
              onClick={handleDrawerToggle}
              //style={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
              <Call />
            </IconButton>
            <div style={{display: "flex", flexDirection:"row"}}>
              <Button style={{ color: '#fff' }}><Link href="/Home">Home</Link></Button>            
              <Button style={{ color: '#fff' }}>book a table</Button>
              <Button style={{ width: "5.5rem" }}>
                <Image src={logo} />
              </Button>
              <Button style={{ color: '#fff' }}><Link href="/Menu">Menu</Link></Button>
              <Button style={{ color: '#fff' }}>order to home</Button>
              </div>
            <Box
              //</Toolbar>style={{ display: { xs: 'none', sm: 'block' } }}
            >              
              <IconButton color="inherit" onClick={openCart}>
                <ShoppingCart />
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
            style={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          
        </Box>
        <Box style={{marginTop: "4rem", width: "100%"}}>
          {children}
          </Box>
          <Footer />
        </>
    );
  }
  
  export default Navbar;
  
