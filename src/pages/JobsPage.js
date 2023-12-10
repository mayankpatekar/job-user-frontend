import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    const fetchJobs = async () => {
        const response = await fetch('http://localhost:5003/api/job',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        if (response.ok) {
            const { jobs } = await response.json();
            setJobs(jobs);
        }
    }

    useEffect(() => {
        if(!localStorage.getItem("Ctoken")){
            navigate("/login")
        }
        fetchJobs();
    }, [navigate])

    console.log(jobs);
    return (
        <div>
            <h1 className='text-xl font-bold p-10'>
                All Jobs
            </h1>

            <div className='h-screen m-auto w-full'>
                <div className='md:flex mt-3 justify-center gap-3  m-auto'>
                    {
                        jobs.map((job, index) => (
                            <Link key={index} to={`/jobs/${job._id}`}>
                            <div className='hover:bg-slate-700 hover:cursor-pointer shadow-2xl  flex gap-3 p-4 bg-slate-900 text-white'>
                                <div>

                                    <div className='pb-3'>
                                        {job.Title}

                                    </div>
                                    <div className='max-w-sm text-left'>
                                        {job.CompanyDetails}

                                    </div>
                                </div>

                                <div className=''>
                                    <span className='bg-white text-black m-1 p-1'>
                                    {job.Type}
                                    </span>
                                </div>



                            </div>
                            </Link>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}

export default JobsPage