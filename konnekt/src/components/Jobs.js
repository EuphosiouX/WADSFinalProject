import React from 'react'
import Job from './Job'

const Jobs = ({jobsData}) => {
  // console.log(jobsData)
  return (
    <div className='jobs'>
      {jobsData.map((job) => {
        return <Job jobData={job} />
      })}
    </div>
  )
}

export default Jobs