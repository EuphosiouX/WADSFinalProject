import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';

const Job = (job) => {
    return (
        <Grid container pb={1} width='800px' justifyContent="center">
            <Grid container item px={3} py={2} display="flex" border="1px solid #D1D3D4" borderRadius='10px' alignItems='center' sx={{cursor: 'pointer', transition: '.3s', backgroundColor: '#D1D3D4', '&:hover':{boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)', borderLeft: '6px solid #008ED3'}}}>
                <Grid item xs>
                    <Typography variant="body1">{job.position}</Typography>
                    <Typography variant="body" sx={{bgcolor: '#008ED3', padding: 0.75, borderRadius: '5px', display: 'inline-block', color: 'white'}}>{job.company}</Typography>
                </Grid>
                <Grid container item xs>
                    {job.languages.map((language) =>(
                        <Grid item key={language} sx={{bgcolor: '#0A0B14', margin: 0.5, padding: 0.75, borderRadius: '5px', color: 'white', display: 'inline-block'}}>
                            {language}
                        </Grid>                        
                    ))}
                </Grid>
                <Grid item container xs justifyContent="flex-end">
                    <Typography variant="body1">{job.postedAt} | {job.level} | {job.location}</Typography>
                    <Button variant="outlined" sx={{mt: 2}}>Check</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Job