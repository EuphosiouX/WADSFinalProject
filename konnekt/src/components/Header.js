import React from 'react'
import logo from '../images/konnekt-logo.png'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    return (
        <header>
            <AppBar sx={{bgcolor: '#D1D3D4'}}>
                <Grid container justifyContent="center" py={2}>
                    <Grid item xs={11} display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems='center' justifyContent='center'>
                            <Link href='http://localhost:3000/'><img className="logo" src={logo} alt="" /></Link> 
                            <Select variant='filled' defaultValue='Full Time' sx={{marginLeft: 3}} size='small'>
                                <MenuItem value="Full Time">Full-Time</MenuItem>
                                <MenuItem value="Part Time">Part-Time</MenuItem>
                                <MenuItem value="Full and Part">Full/Part</MenuItem>
                            </Select>
                            <TextField label="Search Job Now" type="search" variant='filled' size='small' sx={{mx: 3}}/>  
                            <Button variant="contained" startIcon={<SearchIcon />} sx={{bgcolor:'#008ED3'}}>Search</Button>
                        </Box>
                        <Box display="flex" alignItems='center' justifyContent='center'>
                            <Fab size="small" href="http://localhost:3000/" sx={{bgcolor:'#008ED3'}} color='primary'>
                                <Badge color="secondary" badgeContent={3}>
                                    <MailIcon sx={{color: 'white'}}/>
                                </Badge>
                            </Fab>
                            <Fab size="small" href="http://localhost:3000/" sx={{bgcolor:'#008ED3', mx: 1}} color='primary'>
                                <Badge color="secondary" variant="dot">
                                    <NotificationsIcon sx={{color: 'white'}}/>
                                </Badge>
                            </Fab>
                            <Link href="http://localhost:3000/" sx={{color:'#008ED3', fontSize: '20px'}}>Logout</Link>
                        </Box>
                    </Grid> 
                </Grid>
            </AppBar>           
        </header>
    )
}

export default Header