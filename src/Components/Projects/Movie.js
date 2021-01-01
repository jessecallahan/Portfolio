import ProjPic from './../../Assets/moviepic.png'
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
          <h1>Movie Spective</h1>
          <p className={classes.color}>I collaborated with my friend Marcin on this project where you can look up movie titles and facts about them. We used a rather robust free movie api called moviedatabase API. There is also a noSQL feature where you can save your favorite movies. </p>
          <p>Note: In order to use this page, click the sign up tab and proceed to make an account and sign in. In order to see if you succesfully signed in use your browser's console then enjoy.</p>
          <p><a href='https://marcinszopik.github.io/Movie-Spective/' target="_blank" rel="noreferrer">Link to Movie Spective</a></p>
          <p><a href='https://github.com/Marcinszopik/Movie-Spective' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>

        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://marcinszopik.github.io/Movie-Spective/' target="_blank" rel="noreferrer"><img className={classes.img} alt="movie website" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}