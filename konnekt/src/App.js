import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import data from './data.json';
import Jobs from './components/Jobs'
import Header from './components/Header'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Job from './components/Job';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Profile from './components/Profile';
import AuthProvider from './contexts/AuthContext';
import Dashboard from "./components/Dashboard";
import PrivateRoute from './components/PrivateRoute'
import Forgot from './components/Forgot'

function App() {
    // console.log(data)
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/signin' element={<SignIn/>}/>
                        <Route path='/forgot' element={<Forgot/>}/>
                        <Route element={<PrivateRoute/>}>
                            <Route exact path='/' element={<Dashboard/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
            {/* <SignIn/> */}
        </div>
    );
}

export default App;