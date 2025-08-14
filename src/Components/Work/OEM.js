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

export default function OEM() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <h1>Raw Material Supply Chain Management Application for Large Automotive OEM</h1>
        <div className={classes.color}>
          <p className={classes.color}>The application is a workflow and approval web application used by the OEM’s supply-chain partners to define, submit for approval and manage changes to steel and aluminum part specifications. In addition, trials raw material ordering and shipments are managed within the application on behalf of the OEM’s part suppliers. The application supports bi-directional integration with the OEM’s SAP system..</p>
          <p>I am a developer for new features and enhancements made to this application. I provide ongoing production support, code enhancements and fixes to the application. I report directly to the Solution Architect to ensure work is delivered on time and within scope.
          </p>
          <p>My duties include:
            <ul>
              <li>
                Design, plan, and implements new features/enhancements to both backend and frontend code
              </li>
              <li>
                Service, bug fixes, decompose and prioritize development tasks
              </li>
              <li>
                Work with Honda Trading Team to ensure that enhancements and new features are being delivered on time and meet expectations

              </li>
              <li>
                Technologies used: Oracle, JAVA, XML, JavaScript
              </li>
              <li>
                Create, review, and update documentation and specifications
              </li>
            </ul>
          </p>
        </div>
      </Grid>

    </div >
  );
}