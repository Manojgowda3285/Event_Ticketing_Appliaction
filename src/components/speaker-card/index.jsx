import { Stack } from "@mui/material";
import styles from "./SpeakerCard.module.css";
import { Facebook, Language, LinkedIn, X } from "@mui/icons-material";

const SpeakerCard = ({
  image,
  name,
  descript,
  linkedin_link,
  x_link,
  facebook_link,
  org,
}) => {
  return (
    <Stack spacing={1} pb={1} className={styles["speaker-card"]}>
      <div className={styles["image-container"]}>
        <img className={styles["speaker-img"]} src={image} alt="" />
      </div>
      <Stack px="8px" spacing={1}>
        <p className={styles["name"]}>{name}</p>
        <p className={styles["desec"]}>{descript}</p>
        <p className={styles["org"]}>{org}</p>
        <Stack direction="row" gap={0.4}>
          <a href={facebook_link} target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href={x_link} target="_blank" rel="noopener noreferrer">
            <X />
          </a>
          <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <Language />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SpeakerCard;
