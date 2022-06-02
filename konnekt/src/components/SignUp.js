import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../images/konnekt-logo.png';
import {useAuth} from '../contexts/AuthContext';
import { Alert } from '@mui/material';

const SignUp = () => {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState();
    const { signUp } = useAuth();

    async function handleSubmit(e){
        e.preventDefault()

        if (pass.length < 8){
            return setError('Password must be at least 8 character long')
        }

        try{
            setError('')
            setLoading(true)
            await signUp(email, pass)
            navigate('/')
        }
        catch{
            setError('Unexpected error occured')
        }

        setLoading(false)
        
        // Change the navigate logic and link later
        // return navigate("/");
    }

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item
                sm={4}
                md={7}
                style={{
                backgroundImage: 'url(https://source.unsplash.com/random/?office,work,company)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
            />
            <Grid item xs={12} sm={8} md={5} >
                
                <Box
                    sx={{
                        my: 15,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <img className="logo" src={logo} alt="" />
                    {error && <Alert severity='error'>{error}</Alert>}
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5 }}>
                        <Grid container spacing={1} justifyContent='center'>
                            <Grid item sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoComplete="given-name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    autoComplete="family-name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} sx={{mt:1}}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={loading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#008ED3'}}
                        >
                        Sign Up
                        </Button>
                        <Grid>
                            <Link href="/signin" variant="body" sx={{color: '#008ED3'}}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SignUp