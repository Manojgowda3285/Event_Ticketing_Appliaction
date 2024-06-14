import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./Speakers.module.css";
import SpeakerCard from "../../components/speaker-card";
import Description from "../../components/description";


const Speakers = () => {
  return (
    <div className={styles["speakers_container"]}>
      <div className="container">
        <Stack
          spacing={3}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={"This is speakers section"} />
          <Description header="This is the description for speakers section."/>

          <Stack width="100%" direction="row" gap={5} justifyContent="center">
         <SpeakerCard/>
         <SpeakerCard/>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Speakers;
