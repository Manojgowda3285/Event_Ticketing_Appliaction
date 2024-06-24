import { Stack } from "@mui/material";
import Description from "../../components/description";
import SectionTitle from "../../components/section-title";
import styles from "./Sponsers.module.css";
import { getEventSponsorsData, getEventsData } from "../../redux/slices/eventSlice";
import { useSelector } from "react-redux";
const Sponsers = () => {
  const sponsor_data = useSelector(getEventSponsorsData);
  const event_data = useSelector(getEventsData);
  return (
    <div className={styles["speakers_container"]}>
      <div className="container">
        <Stack
          spacing={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={event_data?.sponsor_section_title} />
          <Description header={event_data?.sponsor_section_description.replace(/<\/?p>/g, "")} />
          <Stack
            direction="row"
            justifyContent="space-between"
            gap={5}
            flexWrap="wrap"
          >
            {sponsor_data?.uncategorized?.map((sponsor, index) => (
              <div key={index} className={styles["sponsors"]}>
                <img
                  className={styles["sponsor-image"]}
                  src={sponsor?.sponsor_image_url}
                />
              </div>
            ))}
          </Stack>

          <p className={styles["type-heading"]}>Sponsor Category</p>
          <Stack
            direction="row"
            justifyContent="space-between"
            gap={5}
            flexWrap="wrap"
          >
            { sponsor_data?.categorized && sponsor_data?.categorized[0]?.sponsors?.map((sponsor, index) => (
              <div key={index} className={styles["sponsors"]}>
                <img
                  className={styles["sponsor-image"]}
                  src={sponsor?.sponsor_image_url}
                />
              </div>
            ))}
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Sponsers;
