import styles from "./Description.module.css"

const Description = ({header}) => {
  return (
    <p className={styles["descript"]}>{header}</p>
  )
}

export default Description