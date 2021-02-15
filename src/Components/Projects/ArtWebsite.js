import ProjPic from './../../Assets/artpic.jpg'
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
    height: 300,
    'box-shadow': '3px 8px 3px 3px rgba(38,70,83,.4)'
  },

}));

export default function Project1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <h1>Art Website</h1>
          <p className={classes.color}>This is a website for my Dad who is a visual artist. We used the very cool <a href='https://github.com/neptunian/react-photo-gallery' target="_blank" rel="noreferrer">react-photo-gallery</a> dependency to display his art and React Bootstrap to handle the other stuff. We also used the Flickr Api to populate our gallery. He uploads his work to his Flickr account and his site automatically updates with the new work. Enjoy!</p>
          <p><a href='https://jessecallahan.github.io/mikes-art-website/' target="_blank" rel="noreferrer">Link to Art Site</a></p>
          <p><a href='https://github.com/jessecallahan/mikes-art-website' target="_blank" rel="noreferrer">Link to GitHub</a></p>
        </Grid>
        <Grid item md={6}>
          <br></br>
          <br></br>
          <div >
            <a href='https://jessecallahan.github.io/mikes-art-website/' target="_blank" rel="noreferrer"><img className={classes.img} alt="art" src={ProjPic} /></a>
          </div>
        </Grid>
      </Grid>
    </div >
  );
}