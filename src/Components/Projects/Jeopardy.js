import ProjPic from './../../Assets/jeopardy.png'
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
          <h1>Jeopardy! Simulator</h1>
          <p className={classes.color}>Jeopardy! Simulator emulates the classic game show game using CSS and modern webpack. This game also uses api technology, utilizing the trivia api, <a href='https://jservice.io/' target="_blank" rel="noreferrer">J Service</a>. I also collaborated on this project with four other people remotely so github and git branching was used. Do you have what it takes to score big in Jeopardy? Try it out!</p>
          <p><a href='https://saoud.github.io/Team-Week-Project-Jeopardy-Simulator/' target="_blank" rel="noreferrer">Link to Jeopardy! Simulator</a></p>
          <p><a href='https://github.com/saoud/Team-Week-Project-Jeopardy-Simulator' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://saoud.github.io/Team-Week-Project-Jeopardy-Simulator/' target="_blank" rel="noreferrer"><img className={classes.img} alt="jeopardy simulator" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}