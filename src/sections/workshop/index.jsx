import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./Workshop.module.css";
import Description from "../../components/description";
import WorkshopCard from "../../components/workshop-card";
import { getEventWorkshopsData, getEventsData } from "../../redux/slices/eventSlice";
import { useSelector } from "react-redux";

const Workshop = () => {
  const workshop_data = useSelector(getEventWorkshopsData);
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
          <SectionTitle header={event_data?.workshop_section_title} />
          <Description header={event_data?.workshop_section_description.replace(/<\/?p>/g, "")}  />

          <Stack width="100%" direction="row" justifyContent="center" flexWrap="wrap" gap={7}>
    { workshop_data.map((data , index)=>(
      <WorkshopCard key={index} image={data?.workshop_banner_url
      } header={data?.workshop_title}
      speakers_image={data?.workshop_speakers
      }
      />
    ))}
          
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Workshop;
