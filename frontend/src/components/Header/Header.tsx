import classes from "./Header.module.scss"
import logo from "../../assets/logo_setmate.svg"
import { Button } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <nav className={classes.navbar}>
                <div>
                    <img src= {logo} alt="logo setmate" className={classes.logo}/>
                </div>
                <ul>
                    <li><a href="#">Concept</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><Button variant="outline-dark">Se connecter</Button></li>
                    <li><Button variant="dark" className={classes.buttonInscription}>S'inscrire</Button></li>
                </ul>
            </nav> 
        </header>
        
    )
}