'use client';
import { Box, Grid, styled, Tab, Tabs } from '@mui/material';
import React from 'react';
import FIT from './FIT';
import OEM from './OEM'

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: '#228B22',
  },
}));

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
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
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,

  };
}

function Work() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            slotProps={{
              indicator: {
                sx: { backgroundColor: '#228B22' },
              },
            }}
          >
            <StyledTab label="Financial Intelligence Tool" {...a11yProps(0)} />
            <StyledTab label="Raw Material Supply Chain Management Application" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <TabPanel value={value} index={0}>
            <FIT />
          </TabPanel >
          <TabPanel value={value} index={1}>
            <OEM />
          </TabPanel >
        </Grid>
      </Grid>
    </>
  );
}


export default Work