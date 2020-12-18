import Headshot from '../Assets/headshot.jpg'
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
  headshotimg: {
    margin: 'auto',
    display: 'block',
    maxWidth: '60%',
    maxHeight: 'auto',
    'box-shadow': '3px 8px 3px 3px rgba(38,70,83,.4)'
  },

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <h1>Hi. I'm Jesse Callahan</h1>
          <p className={classes.color}>Full Stack Developer</p>
        </Grid>
        <Grid item md={6}>
          <div >
            <img className={classes.headshotimg} alt="Profile" src={Headshot}></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}