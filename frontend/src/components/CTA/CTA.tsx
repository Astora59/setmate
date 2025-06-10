import classes from "../CTA/CTA.module.scss";
import { Button } from "react-bootstrap";
import logo from "../../assets/logo_setmate.svg"

export default function CTA() {
    return (
        <section className={classes.CTA_container}>
            <div className={classes.CTA_content}>
                <img src={logo} alt="logo Setmate" className={classes.logo}/>
                <h2 className={classes.CTA_title}>Looking to design & develop an amazing website?</h2>
                <p className={classes.CTA_text}>Need a hand to design and develop a world-class website for your company, or to create a premium UI/UX design for your app? At BRIX Agency we are ready to help you!</p>
                <Button variant="dark">Créer un tournoi</Button>
            </div>
            
        </section>
    );
}