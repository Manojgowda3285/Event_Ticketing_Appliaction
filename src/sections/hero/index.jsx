import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from "./Hero.module.css"
import {  LanguageRounded, LaunchOutlined } from '@mui/icons-material'
import dayjs from 'dayjs'

const Hero = ({end_date}) => {
  const [ timeRemaining , setTimeRemaining] = useState(0)
 
  useEffect(() => {
   
      const timerInterval = setInterval(() => {
        const newTimeRemaining = dayjs(end_date).diff(dayjs(), "second")
        if (newTimeRemaining <= 0) {
          clearInterval(timerInterval);
        } else {
          setTimeRemaining(newTimeRemaining);
        }
      }, 1000);

      return () => clearInterval(timerInterval);
    
  }, []);

  const formatTimeRemaining = (seconds , type) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const remainingSeconds = seconds % 60;

    const formattedDays = days.toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    if(type === "days"){
    return (
     formattedDays
    )
  }else if (type === "hrs" ){
    return (
      formattedHours
     )
  }else if (type === "min" ){
    return (
      formattedHours
     )
  }else if(type === "sec"){
    return(
      formattedSeconds
    )
  }
  };
  
  


  return (
    
    <div className={styles["hero_container"]}>
    
    
   <Box  width="100%">
    <Grid container columnSpacing={4} rowSpacing={5}>
<Grid item xs={12} md={6}>

<Stack spacing={3}>
  <h2 className={styles["event_title"]}>
  KonfHub Frontend Evaluation Task
  </h2>
  <span className={styles["event-date"]}>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</span>
  <Stack direction="row" gap={0.5} alignItems="center" >
    <LanguageRounded sx={{color:"#FDB14B"}}/>
    <span className={styles["event-city"]}>Online</span>
  </Stack>

  <Stack width="100%" flexWrap="wrap" direction="row" gap={1}>
  <Stack direction="row" width="100%" gap ={0.5} alignItems="center" justifyContent="center" className={styles["buy-btn"]}>
     <a>Official Website    </a>
     <LaunchOutlined/>
    
  </Stack>
  <a className={styles["buy-btn"]}>Buy Now</a>
  </Stack>
</Stack>
</Grid>
<Grid item xs={12} md={6}>
   <Stack spacing={5} justifyContent="center" alignItems="center">
    <div className={styles["info_card"]}>
        <img style={{borderRadius:"15px"}} src='https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg'/>
    </div>
    <Stack direction="row" gap={{xs:2 ,sm:4} }>
        {
            ['days',"hrs","min","sec"].map((data)=>(
<div className={styles["event-time-remainder"]}>
    <span className='
    '>
        {formatTimeRemaining(timeRemaining ,data )}
    </span>
    <h5>
      {data}
    </h5>
  </div>
            ))
        }
  
    </Stack>
   </Stack>
</Grid>
    </Grid>
   </Box>
   </div>
  
  )
}

export default Hero