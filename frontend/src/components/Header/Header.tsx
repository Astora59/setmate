import classes from "./Header.module.scss"

export default function Header() {
    return (
        <header>
            <nav className={classes.navbar}>
                <div>
                    <img src= "./assets/logo_setmate.svg" alt="logo setmate"/>
                </div>
                <ul>
                    <li><a href="#">LAUNCHES</a></li>
                    
                </ul>
            </nav> 
        </header>
        
    )
}