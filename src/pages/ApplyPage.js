import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ApplyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [resume, setResume] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setResume(file);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !resume) {
            // Handle error, both fields are required
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('resume', resume);
        formData.append('jobId',id);

        try {
            const response = await fetch('http://localhost:5003/application/apply', {
                method: 'POST',
                headers:{
                

                    Authorization: `User ${localStorage.getItem("Ctoken")}`
                },
                body: formData,
            });

            if (response.ok) {
                // Handle successful submission
                alert('Application submitted successfully');
                navigate('/jobs');
                // Clear form fields after successful submission if needed
                setName('');
                setResume(null);
            } else {
                // Handle submission failure
                console.error('Application submission failed');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("Ctoken")) {
            navigate("/login")
        }


    }, [navigate])
    return (
        <div className='h-screen grid place-content-center'>
            <div className='max-w-sm bg-slate-200 shadow-2xl p-4'>

                <h2>Apply for a Job</h2>
                <form onSubmit={handleSubmit}>
                    <div className='text-left pb-3'>
                        <label htmlFor="name" className=''>Full Name:</label>
                        <input
                            className='border-2 p-1 m-1 rounded-lg'
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className='text-left pb-3'>
                        <label htmlFor="resume">Upload Resume:</label>
                        <input
                            type="file"
                            id="resume"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                        />
                    </div>
                    <button className='bg-sky-500 w-full text-white p-2 rounded-lg hover:bg-sky-950' type="submit">Submit Application</button>
                </form>
            </div>
        </div>
    )
}

export default ApplyPage