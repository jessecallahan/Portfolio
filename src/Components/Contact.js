import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 300px'
  }
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <h1>
        <a href='https://github.com/jessecallahan' target="_blank" rel="noreferrer">GitHub</a></h1>
      <h1>
        <a href='https://www.linkedin.com/in/jessetylercallahan/' target="_blank" rel="noreferrer">LinkedIn</a></h1>
      <h1><a href='https://jessecallahanswork.wordpress.com/' target="_blank" rel="noreferrer">Media Arts Portfolio</a></h1>
    </Grid>
  )
}
