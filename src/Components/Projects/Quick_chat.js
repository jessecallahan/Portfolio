import ProjPic from './../../Assets/chatpic.png'
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
          <h1>Quick Chat</h1>
          <p className={classes.color}>A quick and easy way to chat with your friends. It uses React, Redux, Firestore, Firebase, React-Router. I made the art using sketchbook on a tablet. Check out the github to see how it works -- for people interested in using it -- go to the website sign up and invite a friend to one of your chat rooms.</p>
          <p><a href='https://jessecallahan.github.io/quick_chat/#/' target="_blank" rel="noreferrer">Quick Chat</a></p>
          <p><a href='https://github.com/jessecallahan/quick_chat' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/quick_chat/#/' target="_blank" rel="noreferrer"><img className={classes.img} alt="chat" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}