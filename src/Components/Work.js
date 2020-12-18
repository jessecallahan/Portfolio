import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Project1 from './Project1';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,

  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid #e8e8e8',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 350,
  },
  indicator: {
    backgroundColor: '#228B22',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,

  },
}));

export default function Work() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Tabs
        classes={{
          indicator: classes.indicator
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
        alignItems="flex"
      >
        <Tab label="City Tracker" {...a11yProps(0)} />
        <Tab label="Pandemic Game" {...a11yProps(1)} />
        <Tab label="Chat App" {...a11yProps(2)} />
        <Tab label="Baseball 95" {...a11yProps(3)} />
        <Tab label="Movie Thing" {...a11yProps(4)} />
        <Tab label="Pizza Parlor" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Project1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Project1 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Project1 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Project1 />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Project1 />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Project1 />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Project1 />
      </TabPanel>
    </div>
  );
}
