import ProjPic from './../../Assets/soundmaker.png'
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
          <h1>Sound Maker</h1>
          <p className={classes.color}>This is a collaborative class project using web audio api. Originally built as a C# .NET ASP Core MVC project but then later turned into a JS project. Both can be found below. The original intent of building it in the .NET ASP framework was to add the functionality where a user can "save" their effects to a db using MySQL. Unfortunatly we ran out of time. Some cool things about this project was making the effects from scratch. Check out the code, we made a modular synth out of JS code.</p>
          <p><a href='https://github.com/Sofacosta/SoundMaker.Solution' target="_blank" rel="noreferrer">Link to GitHub page</a></p>
          <p><a href='https://jessecallahan.github.io/SoundmakerJS/' target="_blank" rel="noreferrer">Link to JS Version</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/SoundmakerJS/' target="_blank" rel="noreferrer"><img className={classes.img} alt="chat website" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}