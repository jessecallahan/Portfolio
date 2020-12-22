import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Home from './Home'
import Work from './Work'
import About from './About'
import Contact from './Contact'

const StyledTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8'

  },
  indicator: {
    backgroundColor: '#228B22',
  },
})(Tabs);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 150,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#000000',
      opacity: 1,
    },
    '&$selected': {
      color: '#228B22',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#228B22',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "padding-top": "50px"

  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: "white",

  },
}));

const TabPanel = (props) => {
  const { children, value, index } = props
  return (
    <div>
      {value === index && (
        <h1>{children}</h1>
      )
      }
    </div>
  )
}

export default function Control() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <StyledTabs value={value} onChange={handleChange} aria-label="ant example">
          <StyledTab label="Home" />
          <StyledTab label="About" />
          <StyledTab label="Work" />
          <StyledTab label="Contact" />
        </StyledTabs>
      </Grid>
      <Grid container justify="center">
        <div className={classes.demo1}>

          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Work />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Contact />
          </TabPanel>
          <Typography className={classes.padding} />
        </div>
      </Grid>
    </div >

  );
}




