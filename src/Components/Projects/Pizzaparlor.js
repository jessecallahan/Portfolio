import ProjPic from './../../Assets/pizzapic.png'
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
          <h1>Pizza Parlor</h1>
          <p className={classes.color}>Jesse's Pizza Place is an example of a pizza parlor's ticket system. It takes orders, holds orders in a fake database, and shows them to the user. Kind of a mock back end system for a restaurant application. </p>
          <p><a href='https://jessecallahan.github.io/jesses_pizza_place/' target="_blank" rel="noreferrer">Jesse's Pizza Place Website</a></p>
          <p><a href='https://github.com/jessecallahan/jesses_pizza_place' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/jesses_pizza_place/' target="_blank" rel="noreferrer"><img className={classes.img} alt="pizza" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}