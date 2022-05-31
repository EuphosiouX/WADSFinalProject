import React from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const skills = ['js', 'react', 'python'];

const Profile = () => {
    return (
        <Grid container width='250px' height='200px' mx={1} borderRadius='10px' justifyContent="center" display='column' sx={{cursor: 'pointer', backgroundColor: '#008ED3'}}>
            <Grid container height='75px' borderRadius='10px' sx={{
                backgroundImage: 'url(https://source.unsplash.com/random/?office,work,company)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
            />
            <Grid container height='125px' width='200px' mt={-7} justifyContent='center' textAlign='center' display='column'>
                <Avatar sx={{ width: 60, height: 60, border: "6px solid #008ED3" }}>H</Avatar>
                <Grid>
                    <Typography variant='body' fontWeight='700' fontSize='18px' color='white'>Amber Johnson</Typography>
                    <Grid>
                        <Typography variant='body' color='white'>Full stack web developer, excel in python</Typography>
                    </Grid>
                </Grid>
            </Grid>     
        </Grid>
    )
}

export default Profile