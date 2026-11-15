'use client';
import { Grid } from '@mui/material';
import React from 'react';


// const useStyles = makeStyles(() => ({
//   root: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     margin: '0 50px'
//   },
//   color: {
//     color: '#228B22',
//     margin: 0
//   },
//   headshotimg: {

//   },
//   imageContainer: {

//   },
//   h1: {

//   fontSize: 70,
//   margin: '24px 0'

//   }
// }));

export default function Home() {


  return (
    <Grid container sx={{ flexDirection: 'row', pt: 4 }} spacing={3}>
      <Grid size={6} style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img
          alt="Headshot"
          src={'/images/headshot-final.jpg'}
          style={{
            maxWidth: '70%',
            maxHeight: 'max-content',
            boxShadow: '3px 8px 3px 3px rgba(38,70,83,.4)'
          }}
        ></img>
      </Grid>
      <Grid size={6}>
        <h1>Hi. I'm Jesse Callahan</h1>
        <h3>Full Stack Developer</h3>
      </Grid>
    </Grid>
  );
}