import Headshot from '../Assets/headshot-final.jpg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: '0 50px'
  },
  color: {
    color: '#228B22',
    margin: 0
  },
  headshotimg: {
    maxWidth: '70%',
    maxHeight: 'max-content',
    'box-shadow': '3px 8px 3px 3px rgba(38,70,83,.4)'
  },
  imageContainer: {
    display: 'flex',
    justifycontent: 'center'
  },
  h1: {

  fontSize: 70,
  margin: '24px 0'

  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root}>
        <Grid item> 
          <h1 className={classes.h1}>Hi. I'm Jesse Callahan</h1>
          <h3 className={classes.color}>Full Stack Developer</h3>
        </Grid>
        <Grid item className={classes.imageContainer}>
           <img className={classes.headshotimg} alt="Headshot" src={Headshot}></img>
        </Grid>
      </Grid>
    </>
  );
}