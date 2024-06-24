import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./Speakers.module.css";
import SpeakerCard from "../../components/speaker-card";
import Description from "../../components/description";
import { getEventSpeakersData, getEventsData } from "../../redux/slices/eventSlice";
import { useSelector } from "react-redux";

const Speakers = () => {
  const speakers_data = useSelector(getEventSpeakersData);
  const event_data = useSelector(getEventsData);
  return (
    <div className={styles["speakers_container"]}>
      <div className="container">
        <Stack
          spacing={3}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={event_data?.speaker_section_title} />
          <Description header={event_data?.speaker_section_description.replace(/<\/?p>/g, "")} />

          <Stack
            width="100%"
            direction="row"
            gap={5}
            justifyContent="center"
            flexWrap="wrap"
          >
            {speakers_data?.map((speaker,index) => (
              <SpeakerCard
              key={index}
                image={speaker?.image_url}
                org={speaker?.organisation}
                name={speaker?.name}
                descript={speaker?.designation}
                facebook_link={speaker?.facebook_url}
                x_link={speaker?.twitter_url}
                linkedin_link={speaker?.linkedin_url}
              />
            ))}
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Speakers;
