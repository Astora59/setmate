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
                    <li><a href="#">LAUNCHES</a></li>
                    <Button variant="primary">Clique-moi</Button>;
                </ul>
            </nav> 
        </header>
        
    )
}