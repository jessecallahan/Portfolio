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
          <h1>Fire Chat</h1>
          <p className={classes.color}>This is a chat app I am working on with my friend Supriya. Also my friend and artist, Tara is going to help with art direction. We are in predeployment. What we are trying to do is make a chat app that can be created in a web browser and sent as a link; a way to get a chat room together quickly without downloading an app or signing up to a service. We are developing it with React, React Hooks, and Firestore.</p>
          <p><a href='https://github.com/jessecallahan/fire_chat' target="_blank" rel="noreferrer">Link to GitHub page</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <img className={classes.img} alt="chat website" src={ProjPic} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}