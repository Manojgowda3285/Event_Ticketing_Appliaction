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

          <Stack width="100%" direction="row" gap={5} justifyContent="center" flexWrap="wrap">
         <SpeakerCard image="https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg"/>
         <SpeakerCard image={"https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg"}/>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Speakers;
