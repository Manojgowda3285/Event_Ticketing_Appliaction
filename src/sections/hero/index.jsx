import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import styles from "./Hero.module.css"
import {  LanguageRounded, LaunchOutlined } from '@mui/icons-material'

const Hero = () => {
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
  <Stack direction="row" gap={0.5}>
    <LanguageRounded sx={{color:"#FDB14B"}}/>
    <span className={styles["event-city"]}>Online</span>
  </Stack>

  <Stack  direction="row" gap={1}>
  <Stack direction="row" gap ={0.5} alignItems="center" className={styles["buy-btn"]}>
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
            ['1',"2","3","4"].map(()=>(
<div className={styles["event-time-remainder"]}>
    <span className='
    '>
        3700
    </span>
    <h5>
        Days
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