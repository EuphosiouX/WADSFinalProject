import { React, useState } from 'react'
import { Button, Avatar, Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, IconButton  } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

import { Typography } from '@mui/material';

const Update = (props) => {

    const skills = [
        'Python',
        'C++',
        'C',
        'Java',
        'Javascript',
        'Node',
        'SQL',
        'HTML',
        'CSS'
    ]

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bdate, setBdate] = useState(new Date());
    const [gender, setGender] = useState('Female');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState();
    const { upEmail, upPassword } = useAuth();

    const { open, onClose } = props; 

    const handleClose = () => {
        onClose()
    }

    return(
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle variant='body'>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Update Profile
                    <IconButton>
                        <CloseIcon/>
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant='filled'
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant='filled'
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Birth Date"
                                value={bdate}
                                onChange={(e) => setBdate(e)}
                                renderInput={(params) => <TextField variant='filled' fullWidth {...params} />}
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
                <Grid container> 
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            variant='filled'
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
                            variant='filled'
                            label="Password"
                            type="password"
                            autoComplete="new-password"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            rows={4}
                            variant='filled'
                            label="Profile Description"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography variant='body' fontSize='20px'>Skills</Typography>
                    <Box display='flex'>
                        {skills.map((skill) => (
                            <Box key={skill} sx={{margin: 0.5, padding: 0.75, border: '1px solid #0A0B14', borderRadius: '5px', display: 'inline-block', cursor: 'pointer', transition: '.2s', '&:hover':{backgroundColor: '#0A0B14', color: 'white'}}}>
                                {skill}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box width='100%' display='flex' justifyContent='space-between' align='center' mx={2} mb={1}>
                    <Typography color='red' variant='subtitle'>*Leave field blank if you don't want to update that field</Typography>
                    <Button variant='contained' sx={{backgroundColor:'#008ED3'}}>Update</Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default Update