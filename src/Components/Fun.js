import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import { workService } from './WorkService'
import ArtWebsite from './Projects/ArtWebsite.js';
import Baseball95 from './Projects/Baseball-95.js'
import Soundmaker from './Projects/Soundmaker.js';
import Api from './Projects/Api.js'
import Jeopardy from './Projects/Jeopardy.js'
import Pizza from './Projects/Pizzaparlor.js'
import QuickChat from './Projects/Quick_chat.js'

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
  },
  indicator: {
    backgroundColor: '#228B22',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,

  },
}));

export default function Fun() {

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
        <Tab label="Quick Chat" {...a11yProps(0)} />
        <Tab label="Baseball 95" {...a11yProps(1)} />
        <Tab label="Soundmaker" {...a11yProps(2)} />
        <Tab label="Michael's Art Site" {...a11yProps(3)} /> 
        <Tab label="Jeopardy! Simulator" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <QuickChat />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Baseball95 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Soundmaker />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ArtWebsite />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Jeopardy />
      </TabPanel>
    </div>
  );
}
