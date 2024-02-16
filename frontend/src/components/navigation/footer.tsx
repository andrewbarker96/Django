import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterLinkItem: React.FC<{ links: { href: string; text: string }[] }> = ({ links }) => (
    <Grid item xs={12} sm={6} md={4} className='footer-item'>
      {links.map((link, index) => (
        <div key={index}><a href={link.href}>{link.text}</a></div>
      ))}
    </Grid>
  );
  
  const Footer = () => {
    return (
      <Box>
        <Grid container spacing={2} className='footer'>
          <FooterLinkItem links={[
            { href: "/menu", text: "Menu" },
            { href: "/#contact", text: "Contact Us" },
            { href: "/waitlist", text: "Join the Waitlist" },
          ]} />
          <FooterLinkItem links={[
            { href: "#", text: "Terms of Use" },
            { href: "#", text: "Privacy Policy" },
            { href: "#", text: "Cookie Policy" },
          ]} />
          <Grid item xs={12} sm={6} md={4} className='footer-item'>
            <a href="https://www.facebook.com"><FacebookIcon /></a>
            <a href="https://www.instagram.com"><InstagramIcon /></a>
          </Grid>
        </Grid>
        <Grid container spacing={2} className='copyright'>
          <Grid item xs={12} sm={12} md={12}>
            <div>&copy; 2024 <a href='/'>Pitchfork Eatery</a></div>
          </Grid>
        </Grid>
      </Box>
    )
  }

export default Footer