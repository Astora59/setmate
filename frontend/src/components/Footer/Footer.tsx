import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import discord from "../../assets/discord.svg"
import instagram from "../../assets/insta.svg"

import classes from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_container}>
                <div className={classes.footer_content_left}>
                    <h3 className={classes.footer_title}>Setmate</h3>
                    <p className={classes.footer_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  Sed ornare cursus sed nunc eget dictumd nunc eget dictum  Sed ornare cursus sed nunc eget dictum  </p>
                    <div className={classes.footer_socials}>
                        <img src={twitter} alt="" className={classes.icon_social}/>
                        <img src={facebook} alt="" className={classes.icon_social}/>
                        <img src={discord} alt="" className={classes.icon_social}/>
                        <img src={instagram} alt="" className={classes.icon_social} />
                    </div>
                </div>
                <div className={classes.footer_content_right}>
                    <h3 className={classes.footer_title}>Liens utiles</h3>
                    <ul className={classes.footer_links}>
                        <li><a href="#" className={classes.link_footer}>Accueil</a></li>
                        <li><a href="#" className={classes.link_footer}>Concept</a></li>
                        <li><a href="#" className={classes.link_footer}>Contact</a></li>
                        <li><a href="#" className={classes.link_footer}>Se connecter</a></li>
                        <li><a href="#" className={classes.link_footer}>S'inscrire</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}