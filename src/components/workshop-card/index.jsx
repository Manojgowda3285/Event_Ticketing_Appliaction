import { Avatar, Stack } from "@mui/material"
import styles from "./WorkshopCard.module.css"

const WorkshopCard = () => {
  return (
    <Stack spacing={1} pb={1} className={styles["workshop-card"]}>
         <div className={styles["image-container"]}>
         <img className={styles["workshop-img"]} src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=3840&q=75" alt="" />
         </div>
         <Stack px="8px" spacing={1}>
         <p className={styles["workshop-title"]} >Bruce Wayne</p>
         <p className={styles["workshop-date"]}>Jun 11th, 2024 at 10:00 AM (IST)</p>
         <p className={styles["workshop-description"]}>Wayne Enterprises</p>
         <Avatar src="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"/>
         <div className={styles["veiw-btn"]}><span className={styles["buy-btn"]}>View Details</span></div>
         
         </Stack>
    </Stack>
  )
}

export default WorkshopCard