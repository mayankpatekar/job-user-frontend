import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState([]);


    useEffect(() => {
        if(!localStorage.getItem("Ctoken")){
            navigate("/login")
        }
    const fetchJob = async () => {
        try {
            const response = await fetch(`http://localhost:5003/api/job/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (response.ok) {
                const { job } = await response.json();
                setJob(job);
            }

        } catch (err) {
            alert("something bad in server");
        }
    }

        fetchJob();
    }, [id,navigate])

    //   console.log(job);
    return (
        <div className='h-screen grid place-content-center'>
            <div className='flex gap-4 justify-center max-w-lg p-10 bg-slate-200 shadow-2xl'>

                <div>

                    <h1 className='text-left font-bold text-xl mb-2'>{job.Title}</h1>
                    <div className='text-left mb-2'>
                        <span className='font-bold'>Company name : </span>{job.CompanyDetails}
                    </div>
                    <div className='text-left mb-2'>
                        <span className='font-bold'>job role :</span> {job.Categorie}
                    </div>
                    <div className='text-left bg-white max-w-fit pr-2 pl-2 mb-2 font-bold'>
                        {job.ExperienceRequired ? 'Experience Only' : 'Fresher also can apply'}
                    </div>
                    <div className='text-left mb-2'>
                    <span className='font-bold'>Job description:</span><br />
                        <div className='border-2 border-black p-2 mt-2 mb-2'>
                            {job.Description}
                        </div>
                    </div>
                    <div className='text-left mb-2'>
                    <span className='font-bold'> Skills required:</span>
                        <div className='mt-4 max-w-sm flex justify-center content-center place-items-center'>

                            {
                                job && job.Skills && job.Skills.map((skill, index) => (
                                    <span key={index} className='bg-slate-700 mr-3 p-2 rounded-xl text-white'>{skill.skill}</span>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h1 className="bg-slate-900 text-white p-1">

                    {job.Type}
                    </h1>
                </div>
                
            </div>
            <div className="">
                        <Link to={`/apply/${job._id}`}>
                            <button className='bg-sky-700 w-full font-bold text-white p-2 hover:bg-sky-950'>Apply</button>
                        </Link>
                    </div>
        </div>
    )
}

export default JobPage