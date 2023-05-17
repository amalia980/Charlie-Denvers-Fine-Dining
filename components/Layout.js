import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <div style={{paddingTop: '4.5rem'}}>
        {children}
        </div>
      <Footer />
    </>
  )
}

export default Layout
