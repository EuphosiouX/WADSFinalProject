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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';

const SignUp = () => {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bdate, setBdate] = useState(new Date());
    const [gender, setGender] = useState('Female');
    const [image, setImage] = useState();
    const [image64, setImage64] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState();
    const { signUp, currentUser } = useAuth();

    const dateStyle = (date) => {
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        const yyyy = date.getFullYear();

        if(dd<10){
            dd = '0' + dd
        }

        if(mm<10){
            mm = '0' + mm
        }

        return setBdate(yyyy + '-' + mm + '-' + dd)
    }

    const toBase64 = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            return setImage64(reader.result)
        }
    }

    let handleSubmit = async (e) => {
        e.preventDefault()

        if (pass.length < 8){
            return setError('Password must be at least 8 character long')
        }
        
        try{
            setError('')
            setLoading(true)
            await signUp(email, pass)
            handlePost()
            navigate('/')
        }
        catch (err){
            setError('Unexpected error occured')
        }

        setLoading(false)
    }

    let handlePost = async () => {
        try{
            const uploadData = new FormData();
            uploadData.append('name', firstName + ' ' + lastName)
            uploadData.append('birth_date', bdate)
            uploadData.append('gender', gender)
            uploadData.append('image', image, image.name)
            uploadData.append('email', email)
            // uploadData.append('password', currentUser.uid)

            await fetch('/jobseeker/', {
                method: 'POST',
                body: uploadData
            });

            const res = await fetch('/face-match-enrollment', {
                method: 'POST',
                body: {
                    "images": [
                        `${image64}`
                    ]
                }
            });
            const reply = await res.json()
            console.log(reply)
            }

            
        catch (err){
            console.log(err)
        }
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
                        <Grid container spacing={1} justifyContent='center' mb={1}>
                            <Grid item xs={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoComplete="given-name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Last Name"
                                    autoComplete="family-name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} justifyContent='center'>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Birth Date"
                                        value={bdate}
                                        onChange={(e) => dateStyle(e)}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl>
                                    <FormLabel>Gender</FormLabel>
                                        <RadioGroup     
                                            row
                                            defaultValue="Female"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container mt={1}>
                            <Typography variant='body' mr={3}>Add profile picture</Typography>
                            <input type='file' onChange={(e) => {setImage(e.target.files[0]); toBase64(e.target.files[0])}}></input>
                        </Grid>
                        <Grid container spacing={1} > 
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
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