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

export default function FIT() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
          <h1>Financial Intelligence Tool (FIT)</h1>
          <div className={classes.color}>
          <p >Local governments within Washington State are required to file annual financial reports with the Washington State Auditor’s Office (SAO). The <a href='https://portal.sao.wa.gov/FIT/explore'>Financial Intelligence Tool</a> (FIT) web application provides understandable and easily accessible financial health information to the public using this annual filing information. FIT received the Outstanding Special Project Award in 2016 from the National State Auditors Association as part of their Excellence in Accountability Awards program.</p>
          <p>I am the developer lead for all new features and enhancements made to FIT. I work closely with the Washington State Auditor’s office to ensure that the project meets agency objectives and expectations, help shape scope and provide subject matter expertise for the application. I also works closely with the Lead Technologist and Quality Assurance to ensure the code is robust, secure, scalable, reusable, and ready for production.
          </p>
          <p>My duties include:
            <ul>
              <li>
                Design, plan, and implement new features/enhancements to both backend and frontend code
              </li>
              <li>
                Service, bug fixe, decompose and prioritize development tasks
              </li>
              <li>
                Lead monthly meetings with SAO’s (State Auditor’s Office) development team to share update and expertise on application
              </li>
              <li>
                Work with the SAO team to ensure that enhancements and new features are being delivered on time and meet expectations
              </li>
              <li>
                Maintain and update core frameworks and environment configurations
              </li>
              <li>
                Technologies used: MSSQL, Angular, EF Core, LINQ, ASP.NET Core 6.0, RxJs, OData, DevExtreme, npm
              </li>
              <li>
                Update and maintain database schema, run migrations, create reusable SQL scripts, update stored procedures and views within the database              </li>
              <li>
                Create, review, and update documentation and specifications              </li>
              <li>
                Conduct technology selection research to determine best options for enhancements
              </li>
            </ul>
          </p>
        </div>
      </Grid>
    </div >
  );
}