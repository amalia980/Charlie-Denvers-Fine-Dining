import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <Outlet />
      {children}
      <Footer />
    </>
  )
}

export default Layout
