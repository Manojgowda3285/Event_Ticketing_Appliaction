import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className="container">
        <Stack spacing={3}>
          <Stack width="100%" justifyContent="center" alignItems="center">
            <SectionTitle header={"About The Event"} />
          </Stack>

          <p className={styles["about-text"]}>
            This is the description of an event. This event was created as an
            evaluation task for the role of <strong>Frontend Engineer. </strong>
            <em>Are you the one we are looking for?</em> Don't get nervous. Take
            help if you need. Ask us more questions if you did not understand
            the problem. You can reach-us out at reachus@konfhub.com..
          </p>
          <img
            style={{ maxWidth: "350px" }}
            src="https://dev-media.konfhub.com/resources/2024/June/09/1717971318450-ffa21dd4-3b8d-4b4c-878e-32d640579510.png"
          />
          <div className={styles["video-frame-container"]}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bEM35JDYjrI?si=fgr-41M7hTP1Z4NV"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default About;
