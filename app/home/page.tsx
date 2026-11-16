'use client';
import { Grid } from '@mui/material';

export default function Home() {


  return (
    <Grid container sx={{ display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'center', sm: 'start' },
        flexDirection: { xs: 'column', sm: 'row' }, pt: 4 }} spacing={3}>
      <Grid size={6} style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img
          alt="Headshot"
          src={'/Portfolio/images/headshot-final.jpg'}
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px',
            boxShadow: '3px 8px 3px 3px rgba(38,70,83,.4)'
          }}
        ></img>
      </Grid>
      <Grid size={6}>
        <h1>Hi. I'm Jesse Callahan</h1>
        <p>Full Stack Developer</p>
      </Grid>
    </Grid>
  );
}