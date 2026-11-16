import Grid from '@mui/material/Grid';
import styles from './page.module.css'

export default function Project3() {

  return (
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6}}>
          <h1>Baseball-95</h1>
          <p className={styles.color}>This a ReactJS console game I made called Major League Baseball-95. It was a final project for a class. All the score and "moves" of the 9 inning baseball game are stored in local state. I am working on a version 2.0 that is connected to the noSQL server firebase and will have functions like save game, start new game, and have a leaderboard. All the art was done by my friend Andrew. 3.0 is an app using React Native.</p>
          <p><a href='https://jessecallahan.github.io/baseball-95/' target="_blank" rel="noreferrer">Link to Baseball-95</a></p>
          <p><a href='https://github.com/jessecallahan/baseball-95' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid size={{ xs: 12, md: 6}} sx={{ pt: 4 }}>
          <div>
            <a href='https://jessecallahan.github.io/baseball-95/' target="_blank" rel="noreferrer"><img style={{maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px'}}
            className={styles.img} alt="baseball game" src={'./images/baseballpic.png'} /></a>
          </div>
        </Grid>
      </Grid>
  );
}