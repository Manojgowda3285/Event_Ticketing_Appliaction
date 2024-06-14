import styles from "./SectionTitle.module.css";

const SectionTitle = ({ header }) => {
  return (
    <div>
      <img
        className={styles["about-img"]}
        src="https://dev.konfhub.com/img/about-event.svg"
      />

      <p className={styles["about-heading"]}>{header}</p>
    </div>
  );
};

export default SectionTitle;
