import './App.css';
import data from './data.json';
import Jobs from './components/Jobs'
import Header from './components/Header'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Job from './components/Job';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Profile from './components/Profile';


function App() {
    // console.log(data)
    return (
        <div>
            {/* <SignUp/>
            <SignIn/> */}
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
        
    );
    
}

export default App;