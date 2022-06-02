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
                <Grid container justifyContent='center'>
                    <Grid item display='flex'>
                        <Profile/>
                        <Profile/>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid>
                        {data.map(job => <Job key={job.id} {...job}/>)}
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid>
                        <Profile/>
                    </Grid>
                </Grid>
            </Box>      
        </div>
    )
}

export default Dashboard