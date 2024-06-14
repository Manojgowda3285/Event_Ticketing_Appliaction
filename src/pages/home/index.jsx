import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import Hero from '../../sections/hero'
import { Box, Stack } from '@mui/material'
import Atendees from '../../sections/atendees'
import SectionTitle from '../../components/section-title'
import About from '../../sections/about'
import Tickets from '../../sections/tickets'
import getEventData from '../../services/getEventData'
import Speakers from '../../sections/speakers'
import Workshop from '../../sections/workshop'

const Home = () => {
  const [ event_data , setEvent_data] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEventData();
   
      console.log(response);
    };

    fetchData();
  }, []);


  return (
    <div className='page_wrapper'>

    
    <Navbar
    
    navItems={[
      { name: "Features", path: "#features" },
      { name: "How it works", path: "#howitworks" },
      { name: "Pricing", path: "#pricing" },
      
      {  button: true },
    ]}
  />
  <div className="page-wrapper">
  <Box sx={{ paddingTop: { xs: 2, md: 5, lg: "4.5rem" } }}></Box>
  
  <Hero/>
   
  <Stack  mt={6} spacing={{ xs: "3rem", md: "5rem" }}>

 
  
  
  <Atendees/>
  <About/>
  <Tickets/>
  <Speakers/>
  <Workshop/>

  </Stack>
  </div>
 
  </div>
  )
}

export default Home