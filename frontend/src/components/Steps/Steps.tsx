import classes from "./Steps.module.scss"

export default function Steps() {
    return (
      <section className={classes.steps}>
        <h2>Comment ça fonctionne ?</h2>
        <div className={classes.steps_container}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </section>
    )
}