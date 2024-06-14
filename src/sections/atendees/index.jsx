import { Stack } from '@mui/material'
import styles from"./Atendees.module.css"

const Atendees = () => {
  return (
    <Stack direction="row" width="100%" alignItems="center" gap={20} justifyContent="center" sx={{backgroundColor:"#141b25" , height:"200px"}}>
<Stack spacing={2}>
    <h5 className={styles["stats_name"]}> Attendees</h5>
    <span className={styles["stats_number"]}>
    7777
    </span>
</Stack>
<Stack spacing={2}>
    <h5 className={styles["stats_name"]}> Days</h5>
    <span className={styles["stats_number"]}>
    32
    </span>
</Stack>
    </Stack>
  )
}

export default Atendees