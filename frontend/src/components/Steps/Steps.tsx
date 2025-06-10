import classes from "./Steps.module.scss"
import step1 from "../../assets/steps1.png"
import step2 from "../../assets/steps2.png"
import step3 from "../../assets/steps3.png"

export default function Steps() {
    return (
      <section className={classes.steps_section}>
        <h2>Comment ça fonctionne ?</h2>
        <div className={classes.steps_container}>
            <div className={classes.step}>
                <img src={step1} alt="étape 1 utilisation setmate" />
                <h3>Connectez-vous</h3>
                <p>Afin de faciliter la création de l’événement, connectez-vous pour recevoir des notifications en cas de fin d’un match, ou pour gérer plusieurs événements à la fois.</p>
            </div>
            <div className={classes.step}>
                <img src={step2} alt="étape 2 utilisation setmate" />
                <h3>Créer un événement</h3>
                <p>Ajouter la taille, le nombre de joueurs, le nombre de setups disponibles, les pools, pour gérer de façon optimale votre tournoi.</p>
            </div>
            <div className={classes.step}>
                <img src={step3} alt="étape 3 utilisation setmate" />
                <h3>Gérer le tournoi</h3>
                <p>Ayez toujours un oeil sur l’avancée de tous les tournois. Vous pourrez notamment recevoir une notification quand un tournoi se termine</p>
            </div>
        </div>
      </section>
    )
}