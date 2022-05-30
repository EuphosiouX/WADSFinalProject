import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../images/konnekt-logo.png'

const SignIn = () => {
    
    const navigate = useNavigate

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = () => {
        // Change handle submit later
        console.log(email);
        console.log(pass);
        setEmail('');
        setPass('');
        // Change the navigate logic and link later
        return navigate("/");
    }

    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid xs={12} sm={8} md={5}>
                <Box
                    sx={{
                        my: 20,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <img className="logo" src={logo} alt=""/>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant="filled"
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant="filled"
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 , backgroundColor: '#008ED3'}}
                        >
                        Sign In
                        </Button>
                        <Grid container>
                            <Grid xs>
                                <Link href="#" variant="body" sx={{color: '#008ED3'}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid>
                                <Link href="#" variant="body" sx={{color: '#008ED3'}}>
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid
                sm={4}
                md={7}
                style={{
                backgroundImage: 'url(https://source.unsplash.com/random/?office,work,company)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
            />
        </Grid>
    );
}

export default SignIn