import styles from "./Card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://picsum.photos/250/150"
        alt="Random Image"
      />
      <div className={styles.infos}>
        <h2 className={styles.h2}>CSS Modules</h2>
      </div>
      <div className={styles.infos}>
        <h3 className={styles.h3}>Avantages</h3>
        <p className={styles.p}>
          C'est un des plus utilisés en React actuellement
        </p>

        <h3 className={styles.h3}>Inconvénients</h3>
        <p className={styles.p}>
          Il n'est pas dans la liste des consignes de l'exercice
        </p>
      </div>
      <div className={styles.links}>
        <a href="https://2022.stateofcss.com/en-US/css-in-js/">
          <img
            className={styles.logocss}
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            alt="Logo CSS"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=ULkVUOznXXc">
          <img
            className={styles.logoyoutube}
            src="./src/assets/youtube.png"
            alt="YouTube Logo"
          />
        </a>
      </div>
    </div>
  )
}

export default Card
