import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./About.module.css";
import { useSelector } from "react-redux";
import { getEventsData } from "../../redux/slices/eventSlice";

const About = () => {
  const event_data = useSelector(getEventsData);

  return (
    <div className={styles["about-container"]}>
      <div className="container">
        <Stack spacing={3}>
          <Stack width="100%" justifyContent="center" alignItems="center">
            <SectionTitle header={"About The Event"} />
          </Stack>
          
        
          <p className={styles["about-text"]}  dangerouslySetInnerHTML={{ __html: event_data?.description?.match(/<p>(.*?)<\/p>/) }}/>
          
  
          <img
            style={{ maxWidth: "350px" }}
            src="https://dev-media.konfhub.com/resources/2024/June/09/1717971318450-ffa21dd4-3b8d-4b4c-878e-32d640579510.png"
          />
          <div className={styles["video-frame-container"]} dangerouslySetInnerHTML={{ __html: event_data?.description?.match(/<iframe.*?>.*?<\/iframe>/) }}>
          
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default About;
