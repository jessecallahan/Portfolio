import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Fun from './Fun';
import Blog from './Blog/Blog';
import BlogPost from './Blog/BlogPost';
import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const StyledTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
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
    paddingTop: "50px"
  },
  main: {
    paddingTop: theme.spacing(3),
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
    const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(0);

  // An array of navigation links
  const navLinks = [
    { label: "Home", to: "/portfolio" },
    { label: "About", to: "/about"},
    { label: "Work", to: "/work"},
    { label: "Contact", to: "/contact"},
  ];

  // Effect to sync the active tab with the current URL path
  useEffect(() => {
    const activeLink = navLinks.findIndex(link => link.to === location.pathname);
    setValue(activeLink !== -1 ? activeLink : 0); // Default to home if no match
  }, [location, navLinks]);

  // Handler for when a tab is clicked
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(navLinks[newValue].to);
  };


  return (
    <div className={classes.root}>
      <Grid container justifyContent='center'>
        <StyledTabs value={value} onChange={handleChange} aria-label="navigation">
              {navLinks.map((link, index) => (
                  <StyledTab
                    key={index}
                    label={link.label}
                    value={index}
                  />
                ))}
        </StyledTabs>
      </Grid>
      <Container maxWidth="md" justifyContent='center' className={classes.main}>
        <>
          <Routes> 
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/fun" element={<Fun />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
          </Routes>
        </>
      </Container>
    </div >



  );
}




