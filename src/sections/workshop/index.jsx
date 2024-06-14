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

          <Stack width="100%" direction="row" justifyContent="center" flexWrap="wrap" gap={7}>

          <WorkshopCard image="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75" header="How to make more money"/>
          <WorkshopCard image="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75" header="How to fight crime"/>
          <WorkshopCard image="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75" header="This is a workshop connected to a ticket"/>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Workshop;
