import ProjPic from './../../Assets/baseballpic.png'
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
  // console.log(this.props.name)

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <h1>Baseball-95</h1>
          <p className={classes.color}>This a ReactJS console game I made called Major League Baseball-95. It was a final project for a class. All the score and "moves" of the 9 inning baseball game are stored in local state. I am working on a version 2.0 that is connected to the noSQL server firebase and will have functions like save game, start new game, and have a leaderboard. All the art was done by my friend Andrew. 3.0 is an app using React Native.</p>
          <p><a href='https://jessecallahan.github.io/baseball-95/' target="_blank">Link to Baseball-95</a></p>
          <p><a href='https://github.com/jessecallahan/baseball-95' target="_blank">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/baseball-95/' target="_blank"><img className={classes.img} src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}