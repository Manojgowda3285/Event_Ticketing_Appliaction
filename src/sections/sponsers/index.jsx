import { Stack } from "@mui/material"
import Description from "../../components/description"
import SectionTitle from "../../components/section-title"
import styles from "./Sponsers.module.css"
const Sponsers = () => {
  return (
    <div className={styles["speakers_container"]}>
      <div className="container">
        <Stack
          spacing={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={"This is workshop section"} />
          <Description header="This is the description for workshop sections." />
           <div className={styles["sponsors"]}>
            <img className={styles["sponsor-image"]} src={"https://dev-media.konfhub.com/sponsors/2024/June/09/1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png"}/>
           </div>
           <p className={styles['type-heading']}>Sponsor Category</p>
           <div className={styles["sponsors"]}>
            <img className={styles["sponsor-image"]} src={"https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"}/>
           </div>
        </Stack>
      </div>
    </div>
  )
}

export default Sponsers