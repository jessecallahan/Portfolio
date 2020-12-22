import ProjPic from './../../Assets/artpic.jpg'
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
    height: 300,
    'box-shadow': '3px 8px 3px 3px rgba(38,70,83,.4)'
  },

}));

export default function Project1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <h1>Art Website</h1>
          <p className={classes.color}>I am making a website for my Dad who is a visual artist and wants to sell his work. We are basing it on this portfolio site using Material UI and React and probably something simple like PayPal to make transactions. I will also set up a database for his site and host it on Firebase so he can have analytics and save things. </p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <img className={classes.img} src={ProjPic} />
          </div>
        </Grid>
      </Grid>
    </div >
  );
}