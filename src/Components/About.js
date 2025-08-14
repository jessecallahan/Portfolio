import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Outlet, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  color: {
    color: '#228B22',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '1.5'
  },
  headerColor: {
    color: 'black'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  text: {
    paddingTop: 12
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.color}>
        <ul className={classes.ul}>
          <ol>
            <div className={classes.headerColor}>What I do:</div>
            <ul>
              <li>
                I build modern web applications
              </li>
              <li>
                I maintain several databases and API  
              </li>
              <li>
                One of the projects I work on is a legacy codebase (JAVA 1.7 and XML). Am currently part of the planning and writing of a replacement application due to launch in Spring 2026
              </li>
            </ul>
          </ol>
          <ol>
            <div className={classes.headerColor}>What I've done:</div>
            <ul>
               <li>
                I have a degree in Media Arts from Evergreen State. I worked as a music director at KAOS there in Olympia, WA and then as a reporter/editor for KBCS in Seattle, WA
              </li>
                 <li>
                I obtained an Associate's degree from Seattle Central during COVID, to pursue a Bachelor of Science in Computer Science, where I was accepted to: Seattle Pacific University, Seattle University, and University of Washington Bothell. Was working as a React/JS tutor at this time as well
              </li>
               <li>
                I finished a 6-month intensive coding ‘bootcamp’. Learned the basics of modern web development in a peer programming setting. Obtained a internship. Many of my classmates and I went on to code professionally
              </li>
           
            </ul>
          </ol>
          <ol>
            <div className={classes.headerColor}>What I hope to do:</div>
            <ul>
              <li>
                Help you with your website or application
              </li>
              <li>
                Collaborate on cool open source projects 
              </li>
              <li>
                Continue my education. Either in Computer Science, Software Engineering, and/or AI Development
              </li>
            </ul>
          </ol>
        </ul>
        <div className={classes.text}>I am always experimenting with new ideas and coding for fun. Check out my <Link to="/fun">fun</Link> projects page and my <Link to="/blog">blog</Link>, where I share my ideas.</div>
      </div>
    </>
  );
}