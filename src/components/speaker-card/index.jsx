import { Stack } from '@mui/material'
import styles from "./SpeakerCard.module.css"
import { Facebook, Language, LinkedIn, X } from '@mui/icons-material'

const SpeakerCard = ({image}) => {
  return (
    <Stack spacing={1} pb={1} className={styles["speaker-card"]}>
         <div className={styles["image-container"]}>
         <img className={styles["speaker-img"]} src={image} alt="" />
         </div>
         <Stack px="8px" spacing={1}>
         <p className={styles["name"]} >Bruce Wayne</p>
         <p className={styles["desec"]}>Chairman</p>
         <p className={styles["org"]}>Wayne Enterprises</p>
         <Stack direction="row" gap={0.4}>
            <Facebook/> 
            <X/>
            <LinkedIn/>
            <Language/>
         </Stack>
         </Stack>
    </Stack>
  )
}

export default SpeakerCard