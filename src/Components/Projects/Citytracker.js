import ProjPic from './../../Assets/citytrackerpic.jpg'
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
          <h1>City Tracker</h1>
          <p className={classes.color}>City Tracker allows you to find out more about cities around the world. You might to have to disable COORS in order to use the map search. I made this quite long ago. I want to eventually turn it into a React project. It uses API from a few different services. Was my introduction to npm package managers and Node.js.</p>
          <p>BUG: WIKI API IS DOWN, WORKING TO FIX IT</p>
          <p><a href='https://jessecallahan.github.io/city-tracker/' target="_blank" rel="noreferrer">Link to City Tracker</a></p>
          <p><a href='https://github.com/jessecallahan/city-tracker' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/city-tracker/' target="_blank" rel="noreferrer"><img className={classes.img} alt="city" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}