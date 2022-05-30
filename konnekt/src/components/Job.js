import React from 'react'

const Job = (job) => {

  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools} = job.jobData;

    // console.log(company)

  return (
    <div className="job-container">
      <div className="company">
        <div>{job.jobData.company}</div>
      </div>
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
    </div>
  )
}

export default Job