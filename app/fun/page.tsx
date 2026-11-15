'use client';
import { Box, Grid, styled, Tab, Tabs } from '@mui/material';
import React from 'react';
import ArtWebsite from './ART_WEBSITE';
import Baseball95 from './BASEBALL_95';
import QuickChat from './QUICK-CHAT';
import Soundmaker from './SOUNDMAKER';

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
                        <StyledTab label="Quick Chat" {...a11yProps(0)} />
                        <StyledTab label="Baseball 95" {...a11yProps(1)} />
                        <StyledTab label="Soundmaker" {...a11yProps(2)} />
                        <StyledTab label="Michael's Art Site" {...a11yProps(3)} />
                    </Tabs>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                    <TabPanel value={value} index={0}>
                        <QuickChat />
                    </TabPanel >
                    <TabPanel value={value} index={1}>
                        <Baseball95 />
                    </TabPanel >
                    <TabPanel value={value} index={2}>
                        <Soundmaker />
                    </TabPanel >
                    <TabPanel value={value} index={3}>
                        <ArtWebsite />
                    </TabPanel >
                </Grid>
            </Grid>
        </>
    );
}


export default Work