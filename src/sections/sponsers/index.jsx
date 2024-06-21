import { Stack } from "@mui/material";
import Description from "../../components/description";
import SectionTitle from "../../components/section-title";
import styles from "./Sponsers.module.css";
import { getEventSponsorsData } from "../../redux/slices/eventSlice";
import { useSelector } from "react-redux";
const Sponsers = () => {
  const sponsor_data = useSelector(getEventSponsorsData);
  return (
    <div className={styles["speakers_container"]}>
      <div className="container">
        <Stack
          spacing={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={"This is Event Sponsors"} />
          <Description header="This is the description for workshop sections." />
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
