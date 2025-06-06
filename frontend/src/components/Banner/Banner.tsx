import classes from "./Banner.module.scss"
import banner from "../../assets/banner_setmate.png"

export default function Banner() {
    return (
        <section className={classes.banner}>
            <img src={banner} alt="bannière setmate" className={classes.bannerImage}/>
            <div className={classes.bannerTextContainer}>
                <h1 className={classes.bannerTitle}>SETMATE powered by <span className={classes.vegacy}>Vegacy</span></h1>
                <p className={classes.bannerText}>SetMate est une plateforme web pensée pour les organisateurs de tournois eSport. Elle permet de gérer efficacement les setups disponibles afin d’optimiser la rotation des matchs, minimiser les temps morts et offrir une expérience fluide aux joueurs comme aux spectateurs.</p>
            </div>
        </section>
    )
}