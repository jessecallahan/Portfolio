import ProjPic from './../../Assets/api.png'
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
          <h1>Geocache Api Project</h1>
          <p className={classes.color}>This application simulates the enormously popular Geocache game. It has full CRUD capabilities including a PATCH endpoint to edit and move items in between Geocache locations. The relationship of Geocaching locations to items is a one-to-many database relationship. I built this using C#/.NET ASP Core WEB API and SQLite. Check out the github instructions and give it a try!</p>
          <p><a href='https://github.com/jessecallahan/GeocacheAPI.Solution' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://github.com/jessecallahan/GeocacheAPI.Solution' target="_blank" rel="noreferrer"><img className={classes.img} alt="api" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}