import logo from "../../assets/logo_setmate.svg"
import classes from "./AccountCreation.module.scss"
import login from "../../assets/login.jpg"

export default function AccountCreation() {
    return (
        <section className={classes.container}>
            <div>
                <img src={login} alt="login illustration setmate" className={classes.login_illustration} />
            </div>
            <div className={classes.form_container}>
                <img src={logo} className={classes.logo}alt="logo setmate" />
                <div>
                    <h3>Content de vous revoir !</h3>
                    <div className={classes.input_container}>
                        <input type="email" placeholder="Email" className={classes.input}/>
                        <input type="password" placeholder="Password" className={classes.input} />
                    </div>
                    <div className={classes.button_container}>
                        <button>Se souvenir de moi</button>
                        <p>Mot de passe oublié ?</p>
                    </div>


                </div>
            </div>
            
        </section>
    )
}