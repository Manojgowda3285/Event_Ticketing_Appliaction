import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./Workshop.module.css";
import Description from "../../components/description";
import WorkshopCard from "../../components/workshop-card";

const Workshop = () => {
  return (
    <div className={styles["speakers_container"]}>
      <div className="container">
        <Stack
          spacing={3}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={"This is workshop section"} />
          <Description header="This is the description for workshop sections." />

          <WorkshopCard/>
        </Stack>
      </div>
    </div>
  );
};

export default Workshop;
