import { Box, Container, Toolbar, Typography } from "@material-ui/core";
import styles from "../styles/Footer.module.css"
import Image from "next/image"
import footerImg from "../public/assets/Backgrounds/berni-wittmann-5Rpj24jQeOQ-unsplash.jpg"
import logo from "../public/assets/icons_logos/CD_diner-logo_for_black_bg.png"

const Footer = () => {

    return (
        <>
            <Box className={styles.footer}>

                <Toolbar className={styles.content_footer}>
                    <Container className={styles.footerContent_wrapper} style={{ }}>
                        <div className={styles.footerContent_grid}>
                    <Typography variant="body1" style={{color: "yellow"}}>
                        FIND OUR RESTAURANTS
                    </Typography>
                        <Typography style={{}}>
                            8354 West High Point Court
                            Monroeville, CO 15146
                        </Typography>
                            
                        <Typography style={{}}>
                        490 Rock Maple Dr.
                            Peoria, IL 61604</Typography>
                            
                        <Typography style={{}}>
                            9813 Windfall St.Oak Forest, IL 60452
                        </Typography>

                        <Typography style={{}}>
                            8265 East Ohio Ave. Peabody, MA 01960
                        </Typography>
                        
                        <Typography style={{}}>
                            326 Aspen St.Fairmont, WV 26554</Typography>                         
                            
                        <Typography style={{}}>
                            9455 Peninsula Dr.Oak Lawn, IL 60453
                            </Typography>
                            </div>
                    </Container>

                    <Container className={styles.footer_hours}>
                        <Typography variant="body1" style={{ color: "yellow", marginBottom: "1.5rem" }} gutterBottom>WORKING HOURS</Typography>
                        <Typography>Monday - Friday</Typography>
                        <Typography style={{marginBottom: "1rem"}}>13:00 - 22:00</Typography>
                        <Typography>Saturday - Sunday</Typography>
                        <Typography>13:00 - 24:00</Typography>
                        </Container>
                    </Toolbar>
                    <div className={styles.footer_img_wrapper}>
                    <Image width="300" height="200" src={logo} alt="logo" />
                </div>
            </Box>
        </>
    )
}

export default Footer;