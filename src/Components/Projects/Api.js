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
          <h1>Api</h1>
          <p className={classes.color}>I built a pretty simplistic api that has full CRUD capabilities. I did this using C#, .NET ASP Core framework, and MySQL. The only way to view this is by downloading it off github and running the get and post requests on Postman or some other API tool. It also has some seeded data that you can play around with.</p>
          <p><a href='https://github.com/jessecallahan/AnimalShelter.Solution' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://github.com/jessecallahan/AnimalShelter.Solution' target="_blank" rel="noreferrer"><img className={classes.img} alt="city" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}