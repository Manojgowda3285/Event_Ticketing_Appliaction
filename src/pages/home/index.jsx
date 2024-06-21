import React, { useEffect, useState } from "react";
import Navbar from "../../layout/Navbar";
import Hero from "../../sections/hero";
import { Box, CircularProgress, Stack } from "@mui/material";
import Atendees from "../../sections/atendees";
import About from "../../sections/about";
import Tickets from "../../sections/tickets";
import Speakers from "../../sections/speakers";
import Workshop from "../../sections/workshop";
import Sponsers from "../../sections/sponsers";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncEvents,
  fetchAsyncSpeakers,
  fetchAsyncSponsors,
  fetchAsyncWorkshops,
  getEventsData,
} from "../../redux/slices/eventSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncEvents());
    dispatch(fetchAsyncSpeakers());
    dispatch(fetchAsyncSponsors());
    dispatch(fetchAsyncWorkshops());
  }, [dispatch]);
  const event_data = useSelector(getEventsData);

  console.log("event_data" ,event_data)

  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  }

  return (
    <div className="page_wrapper">
      <Navbar
        navItems={[
          { name: "About", path: "#about" },
          { name: "Tickets", path: "#tickets" },
          { name: "This is speakers section", path: "#speakers" },
          { name: "This is workshop section", path: "#workshop" },
          { name: "This is event sponsors", path: "#sponsors" },

          { button: true },
        ]}
      />
      {event_data ? (
        <div className="page-wrapper">
          <Box sx={{ paddingTop: { xs: 2, md: 5, lg: "4.5rem" } }}></Box>

          {event_data?.end_date && <Hero end_date={event_data?.end_date} />}

          <Stack pb={5} mt={6} spacing={{ xs: "3rem", md: "5rem" }}>
            <Atendees />
            <div id="about">
              <About />
            </div>
            <div id="tickets">
              <Tickets />
            </div>
            <div id="speakers">
              <Speakers />
            </div>
            <div id="workshop">
              <Workshop />
            </div>
            <div id="sponsors">
              <Sponsers />
            
            </div>
          </Stack>
        </div>
      ) : (
        <Box
          sx={{
            position: "absolute",
            right: "unset",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Home;
