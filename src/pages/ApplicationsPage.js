import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ApplicationsPage = () => {
    const navigate = useNavigate();
    const [applications,setApplications] = useState([]);

    const fetchApplications=async()=>{
        const response = await fetch('http://localhost:5003/application/get',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `User ${localStorage.getItem("Ctoken")}`
            }
        })
        if(response.ok){
            const {applications} = await response.json();
            // console.log(data);
            setApplications(applications)
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("Ctoken")){
            navigate("/login")
        }
        fetchApplications();
    },[navigate])
  return (
    <div>
        <h1 className='font-bold text-3xl p-10'>Applications</h1>
        <div className='h-screen grid place-content-start justify-center'>

        <div className='bg-slate-200 max-w-sm p-10 m-10'>
            {
                applications.map((application,index)=>(
                    <div key={index} className=' p-4'>
                        <div className='text-left'>
                            <Link to={`/jobs/${application.JobId}`}>See Job details</Link>
                        </div>
                        <div className='text-left'>
                            <span className='font-bold'>
                            Status : 
                            </span> 
                            <span>

                        {application.Status}
                            </span>
                        </div>
                    </div>
                ))
                
            }
        </div>
            </div>
    </div>
  )
}

export default ApplicationsPage