import logo from "../../assets/logo_setmate.svg"
import classes from "./AccountCreation.module.scss"

export default function AccountCreation() {
    return (
        <section>
            <img src={logo} className={classes.logo}alt="logo setmate" />
            <div>
                <h2>Content de vous revoir !</h2>
                <div>
                    <p>Login</p>
                    <input type="text" />
                </div>

                <div>
                    <p>Mot de passe</p>
                    <input type="password" />
                </div>
                <div>
                    <button>Se souvenir de moi</button>
                    <p>Mot de passe oublié ?</p>
                </div>


            </div>
        </section>
    )
}