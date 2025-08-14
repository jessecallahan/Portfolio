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
                I build modern web applications. I've worked with most of the popular JS frameworks and integrated hundreds of libraries. I do this while maintaining a solid grasp of the fundamentals: HTML, JS, CSS, Window, DOM. It's how most of the frontend stuff is built. This foundational knowledge can also be valuable when fixing bugs. It also allows me to build from things from scratch and to customize further then what's already out there
              </li>
              <li>
                I maintain a few different databases and their connecting API on a variety of ORMs. I can make a CRUD application with standard REST API. I can write complex queries and use LINQ methods. Optimize a database with indexes. All that good stuff. With a handful of tools: Postgres, Oracle, SQLServer. Can also use some of the ‘newer’ tools as well: Trpc, Prisma, Express, Firebase/Firestore  
              </li>
              <li>
                I can work on older code. One of the projects I work on is a legacy codebase built originally in 2001 (JAVA 1.7, XML, Oracle DB). I have already been involved in one major rewrite on a different application that involved accessibility and mobile first design. I am currently involved in re-writing this legacy system due to launch in Spring 2026
              </li>
            </ul>
          </ol>
          <ol>
            <div className={classes.headerColor}>What I've done:</div>
            <ul>
              <li>
                I‘ve completed a rigorous full time 6-month coding ‘bootcamp’. Learned the basics of: JS, React, C# in a peer programming setting. Obtained a internship. Many of my classmates and I went on to code professionally
              </li>
              <li>
                I obtained an Associate's degree from Seattle Central during COVID, to pursue a Bachelor of Science in Computer Science, where I was accepted to: Seattle Pacific University, Seattle University, and University of Washington Bothell. Was working as a React/JS tutor at this time as well
              </li>
              <li>
                I have a degree in Media Arts from Evergreen State. I worked as a music director at KAOS there in Olympia, WA and then as a reporter/editor for KBCS in Seattle, WA
              </li>
            </ul>
          </ol>
          <ol>
            <div className={classes.headerColor}>What I hope to do:</div>
            <ul>
              <li>
                Help you with your website or application. If it’s a bigger project, the company I work for, Fellow, could take a look and possibly offer services
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