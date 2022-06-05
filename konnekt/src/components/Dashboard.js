import React from 'react'
import data from '../data.json'
import Header from './Header'
import Job from './Job';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Profile from './Profile';


const Dashboard = () => {
    return (
        <div>
            <Header/>
            <Box py={15} display='flex' justifyContent='space-between'>
                <Grid container display='flex' justifyContent='center'>
                    <Profile/>
                    <Profile/>
                </Grid>
                <Grid container justifyContent='center'>
                    {data.map(job => <Job key={job.id} {...job}/>)}
                </Grid>
                <Grid container justifyContent='center'>
                    <Profile/>
                </Grid>
            </Box>      
        </div>
    )
}

export default Dashboard