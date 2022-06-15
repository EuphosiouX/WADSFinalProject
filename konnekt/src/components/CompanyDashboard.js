import { React, useEffect, useState} from 'react'
import CompanyHeader from './CompanyHeader'
import CompanyJob from './CompanyJob';
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import CompanyProfile from './CompanyProfile';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import CompanyAddJob from './CompanyAddJob';


const CompanyDashboard = () => {

    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [companyId, setCompanyId] = useState();
    const [companyJob, setCompanyJob] = useState([])
    const { currentUser } = useAuth();

    useEffect(() => {
        let handleFetch = async () => {
            try{
                const ref = await fetch('/jobpost/', {
                    method: 'GET'
                })
                const val = await ref.json()
                if(val.length < 1){
                    navigate('/')
                }
                else{
                    navigate('/companydashboard')
                    for(let i=0; i<val.length; i++) {
                        if(val[i].email === currentUser.email) {
                            setCompanyId(val[i].id)
                        }
                    }
                }

            } catch (err){
                console.log(err)
            }
        }
        handleFetch()
    }, [,companyId]);

    useEffect(() => {
        let handleFetch = async () => {
            try{
                const ref = await fetch('/jobs/?search=' + companyId, {
                    method: 'GET'
                })
                const val = await ref.json()
                if(companyJob.length < 1){
                    setCompanyJob(val)
                }
            }catch(err){
                console.log(err)
            }
        }
        handleFetch()
    }, [companyJob]);

    console.log(companyId)
    console.log(companyJob)

    return (
        <div>
            <CompanyHeader/>
            <Box py={15}>
                <Grid container ml={4} position='fixed'>
                    <CompanyProfile/>
                </Grid>
                <Grid container ml={176} position='fixed'>
                    <CompanyAddJob/>
                </Grid>
                <Grid container ml={69} width='800px'>
                    {companyJob.map(job => <CompanyJob key={job.id} {...job}/>)}  
                </Grid>
            </Box>      
        </div>
    )
}

export default CompanyDashboard