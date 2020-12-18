import CityPic from '../Assets/citytrackerpic.jpg'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 800,
    margin: 0,
    'line-height': 1.6,

  },
  color: {
    color: '#228B22',
    margin: '10px 150px 0px 150px',
    top: 0,
    'line-height': '1.6',
    'font-size': 15
  },
  headerColor: {
    color: 'black'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.color}>
        <ul>
          <ol>
            <div className={classes.headerColor}>What I do:</div>
            <ul>
              <li>
                I make applications, games, and logic puzzles. I like coding for both the art and the problem solving
              </li>
              <li>
                I make music and cool sounds
              </li>
              <li>
                I made this website to learn more about Material UI. I like to learn.
              </li>
            </ul>
          </ol>
          <ol>
            <div className={classes.headerColor}>What I've done:</div>
            <ul>
              <li>
                I organize a weekly coding club where we share ideas and do whiteboarding problems
              </li>
              <li>
                I've worked collaboratively on a bunch of projects. I learned how to code in a pair programming setting.
              </li>
              <li>
                I've been hired in as a tutor in React/JS.
              </li>
              <li>
                Programming is a career change for me, the love of building and making that came out of my media arts career has not left though
              </li>
            </ul>
          </ol>
          <ol>
            <div className={classes.headerColor}>What I hope to do:</div>
            <ul>
              <li>
                Get an internship or job as a developer
              </li>
              <li>
                I am currently pursuing a Bachelor of Science of Computer Science.
              </li>
              <li>
                I am learning JAVA. I know JS/React/CSS and noSQL but I am always looking to get better. I want to learn more programming languages based on projects that are interesting.
              </li>
              <li>
                I like doing math problems, edabit.com, hackerank.com, khan, prob solving websites.
              </li>
            </ul>
          </ol>
        </ul>
      </div>
    </React.Fragment >
  );
}