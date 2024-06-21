import { Avatar, Stack } from "@mui/material";
import styles from "./WorkshopCard.module.css";

const WorkshopCard = ({ image, header, speakers_image }) => {
  return (
    <Stack spacing={1} pb={1} className={styles["workshop-card"]}>
      <div className={styles["image-container"]}>
        <img className={styles["workshop-img"]} src={image} alt="" />
      </div>
      <Stack px="8px" width="100%" spacing={3}>
        <p className={styles["workshop-title"]}>{header}</p>
        <p className={styles["workshop-date"]}>
          Jun 11th, 2024 at 10:00 AM (IST)
        </p>
        <p className={styles["workshop-description"]}>Wayne Enterprises</p>

        <Stack direction="row" gap={3} alignItems="center">
          {speakers_image.map((data) => (
            <Avatar src={data?.image_url} />
          ))}
        </Stack>

        <div className={styles["view-btn"]}>
          <span className={styles["buy-btn"]}>View Details</span>
        </div>
      </Stack>
    </Stack>
  );
};

export default WorkshopCard;
