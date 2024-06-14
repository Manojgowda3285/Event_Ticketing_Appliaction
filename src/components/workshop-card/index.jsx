import { Avatar, Stack } from "@mui/material"
import styles from "./WorkshopCard.module.css"

const WorkshopCard = ({image , header}) => {
  return (
    <Stack spacing={1} pb={1} className={styles["workshop-card"]}>
         <div className={styles["image-container"]}>
         <img className={styles["workshop-img"]} src={image} alt="" />
         </div>
         <Stack px="8px" width="100%" spacing={3}>
         <p className={styles["workshop-title"]} >{header}</p>
         <p className={styles["workshop-date"]}>Jun 11th, 2024 at 10:00 AM (IST)</p>
         <p className={styles["workshop-description"]}>Wayne Enterprises</p>
         <Avatar src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"/>
         <div className={styles["view-btn"]}><span className={styles["buy-btn"]}>View Details</span></div>
         
         </Stack>
    </Stack>
  )
}

export default WorkshopCard