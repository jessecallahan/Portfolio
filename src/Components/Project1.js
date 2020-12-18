import CityPic from '../Assets/citytrackerpic.jpg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    maxWidth: 800,
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
          <p className={classes.color}>This is my city tracker. You might to disable COORS. I made it a long time ago.</p>
        </Grid>
        <Grid item md={6}>
          <div >
            <img className={classes.img} alt="Profile" src={CityPic}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}