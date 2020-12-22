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
          <p className={classes.color}>Pizza Parlor is an example of a pizza parlor's ticket system. It takes orders, holds orders in a fake database, and shows them to the user. Kind of a mock back end system for a restaurant application. I plan to replicate this using noSQL and modern front end techniques. </p>
          <p><a href='https://github.com/jessecallahan/pizza-parlor' target="_blank">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <img className={classes.img} src={ProjPic} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}