import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPassPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit =async()=>{
        try{
            const response = await fetch('http://localhost:5003/user/forgotpass',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            })
            if(response.ok){
                const {message} = await response.json();
                alert('Email sent successfully');
            }
        }catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{
        if(localStorage.getItem('Ctoken')){
            navigate('/')
        }   
    })
  return (
    <div>
        <div className='bg-slate-200 h-screen grid place-content-center'>
                <form onSubmit={handleSubmit} className="max-w-md bg-white p-4 rounded-sm">

                    <h1 className='font-bold text-3xl pb-3 pt-3'>FogetPassword</h1>
                    <div className='pb-3 pt-3'>
                        <input className="border-2 rounded-lg p-2" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' type='email' />
                    </div>  
                                  
            
                    <div>
                        <button type='submit' className="bg-sky-500 w-full text-white p-2 rounded-lg hover:bg-sky-950">Send mail</button>
                    </div>

                </form>
            </div>

    </div>
  )
}

export default ForgotPassPage