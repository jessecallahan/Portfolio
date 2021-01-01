import ProjPic from './../../Assets/pandemic.png'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    maxWidth: 800,
    margin: '-25px 0px 0px 0px',
    'line-height': 1.1,
  },
  color: {
    color: '#228B22',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '60%',
    maxHeight: '60%',
    'box-shadow': '3px 8px 3px 3px rgba(38,70,83,.4)'
  },

}));

export default function Project1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <h1>Pandemic Game</h1>
          <p className={classes.color}>A class project. Made early in my coding path with simple HTML/JS. The lesson was to set and stop intervals. Try playing the game and save the world! </p>
          <p><a href='https://jessecallahan.github.io/Pandemic-game/' target="_blank" rel="noreferrer">Link to Pandemic Game</a></p>
          <p><a href='https://github.com/jessecallahan/Pandemic-game' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/Pandemic-game/' target="_blank" rel="noreferrer"><img className={classes.img} alt="pandemic game" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}