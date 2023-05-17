// import * as React from 'react';
// import Image from 'next/image';
// import AppBar from '@material-ui/core/AppBar';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import IconButton from '@material-ui/core/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';
// import ShoppingCart from '@mui/icons-material/ShoppingCart';
// import { useState } from "react";
// import { CartContext } from '../context/CartContext';
// import { useSelector } from 'react-redux';

// import logo from "../public/assets/icons_logos/CD_diner-logo_for_black_bg.png";
// import Cart from './Cart';

//   const drawerWidth = 540;
//   const navItems = ['Home', 'About', 'Contact'];

// const Navbar = (props) => {

//   const quantity = useSelector(state => state.cart.quantity);

//   const { window, children } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [showIcon, setShowIcon] = useState(false);

//   const { cartVisible, setCartVisible } = useContext(CartContext);

//   // useEffect(() => {
//   //   const width  = window.innerWidth || document.documentElement.clientWidth ||
//   //   document.body.clientWidth;
//   //   if (width === 500) {
//   //     setShowIcon(true);
//   //   }
//   // }, []);

//   const openCart = () => {
//     setCartVisible(true);
//   }

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} style={{ textAlign: 'center' }}>
//       <Typography variant="h6" style={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item}>
//             <Button style={{ textAlign: 'center' }}>
//               <ListItemText primary={item} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {cartVisible && <Cart />}
//       <AppBar component="nav" style={{ backgroundColor: "black" }}>
//         <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>

//           <div>
//           {showIcon && (
//             <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//           style={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           )
//             }
//             </div>
//           <div style={{ display: "flex", flexDirection: "row" }}>
//             <Button style={{ color: '#fff' }} href="/">Home</Button>
//             <Button style={{ color: '#fff' }}>book a table</Button>
//             <Button style={{ width: "5.5rem" }}>
//               <Image src={logo} alt="logo" />
//             </Button>
//             <Button style={{ color: '#fff' }} href="/Menu">Menu</Button>
//             <Button style={{ color: '#fff' }}>order to home</Button>
//           </div>

//           <Box
//           //</Toolbar>style={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             <IconButton color="inherit" onClick={openCart}>
//               <ShoppingCart />
//               <div>{quantity}</div>
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box style={{ marginTop: "4rem", width: "100%" }}>
//         {children}
//       </Box>
//     </>
//   )
// };

//   export default Navbar;
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useSelector } from "react-redux";
import logo from "../public/assets/icons_logos/Charlie LOGO.svg";
import Image from "next/image";
import Link from "next/link";
import Cart from "../components/Cart";
import styles from "../styles/Navbar.module.css";
import cartLogo from "../public/assets/icons_logos/icons8-shopping-cart-50.png";
import phoneLogo from "../public/assets/icons_logos/icons8-rotary-dial-telephone-50.png";
import menuLogo from "../public/assets/icons_logos/icons8-menu-50.png";

const Navbar = () => {
  const { cartVisible, setCartVisible } = useContext(CartContext);
  const quantity = useSelector((state) => state.cart.quantity);
  const [openNav, setOpenNav] = useState(false);

  const openCart = () => {
    setCartVisible(true);
  };

  return (
    <>
      {cartVisible && <Cart />}

      <nav className={styles.navbar}>
            <Image
                                     
              src={phoneLogo}
              width="30"
              height="30"
              alt="phone icon"
            />
            <Image
              onClick={() => setOpenNav(!openNav)}
              className={styles.menuIcon}
              src={menuLogo}
              width="30"
              alt="menu icon"
          />
        
        <ul className={styles.navLinks}>
          
            <li className={styles.bookTable}>
              <Link href="/">
                Book a table
              </Link>
            </li>
            <li className={styles.companyLogo}>
              <Link href="/">
                <Image
                  
                  width="70"
                  src={logo}
                  alt="company logo"
                />
              </Link>
            </li>
            <li className={styles.menu}>
              <Link  href="/Menu">
                Menu
            </Link>
            </li>
        </ul>

        <span>
        <Image
              className={styles.cartWrapper}
              src={cartLogo}
              width="30"
              height="30"
              onClick={openCart}
              alt="cart icon"
            />
          <span>{quantity}</span>
          </span>
      </nav>
    </>
  );
};

export default Navbar;
