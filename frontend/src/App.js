
import React from "react"
import AppLayout from "./home-layout.tsx"
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import HomeSlider from "./components/home/HomeSlider.tsx"
import Locations from "./components/home/locations.tsx"
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function App() {
  return (
    <AppLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} className='home-container flex justify-center'>
          <HomeSlider />
        </Grid>
        <br/>
        <br/>
        <Grid item xs={12} sm={12} md={6}>
          <h2>Contact Us</h2>
          <Item id='contact' className='flex'>
          <h4><PhoneIcon /> | <a href='+16364992003'>(636) 499 2003</a></h4>
          </Item>
          <br />
          <br />
          <h2>Hours</h2>
          <Item id='hours'>
            <p>Monday - Thursday: 7:00am - 9:00pm</p>
            <p>Friday - Sunday: 7:00am - 10:00pm</p>
          </Item>
          <br />
          <br />
          <h2>Follow Us!</h2>
          <Item className='flex gap-6'>
            <a href="https://www.facebook.com"><FacebookIcon /></a>
            <a href="https://www.instagram.com"><InstagramIcon /></a>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Item id='locations'>
            <h2>Location</h2>
            <Locations />
          </Item>
        </Grid>
      </Grid>
    </AppLayout>
  )
}