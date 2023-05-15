import styles from "../styles/Footer.module.css"
import Image from "next/image"
import footerImg from "../public/assets/Backgrounds/berni-wittmann-5Rpj24jQeOQ-unsplash.jpg"
import logo from "../public/assets/icons_logos/Charlie LOGO.svg";

const Footer = () => {

    return (
        <>
            <div className={styles.footer}>

                <div className={styles.content_footer}>
                    <div className={styles.footerContent_wrapper}>
                        <div className={styles.footerContent_grid}>
                    <h2>
                        FIND OUR RESTAURANTS
                    </h2>
                        <h4>
                            8354 West High Point Court
                            Monroeville, CO 15146
                        </h4>
                            
                        <h4>
                        490 Rock Maple Dr.
                            Peoria, IL 61604</h4>
                            
                        <h4>
                            9813 Windfall St.Oak Forest, IL 60452
                        </h4>

                        <h4>
                            8265 East Ohio Ave. Peabody, MA 01960
                        </h4>
                        
                        <h4>
                            326 Aspen St.Fairmont, WV 26554</h4>                         
                            
                        <h4>
                            9455 Peninsula Dr.Oak Lawn, IL 60453
                            </h4>
                            </div>
                    </div>

                    <div className={styles.footer_hours}>
                        <h2 style={{ color: "yellow", marginBottom: "1.5rem" }}>WORKING HOURS</h2>
                        <h4>Monday - Friday</h4>
                        <h4 style={{marginBottom: "1rem"}}>13:00 - 22:00</h4>
                        <h4>Saturday - Sunday</h4>
                        <h4>13:00 - 24:00</h4>
                        </div>
                    </div>
                    <div className={styles.footer_img_wrapper}>
                    <Image width="300" height="200" src={logo} alt="logo" />
                </div>
            </div>
        </>
    )
}

export default Footer;