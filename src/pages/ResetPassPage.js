import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassPage = () => {
    const {resettoken} = useParams();
    const navigate = useNavigate();
    const [pass, setPass] = useState('');
    const handleSubmit =async()=>{
        try{
            // console.log(resettoken);
            const response = await fetch(`http://localhost:5003/user/resetpassword/${resettoken}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({pass})
            })
            if(response.ok){
                alert('password change successfully');
                navigate('/login');
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

                    <h1 className='font-bold text-3xl pb-3 pt-3'>Change password</h1>
                    <div className='pb-3 pt-3'>
                        <input className="border-2 rounded-lg p-2" value={pass} onChange={(e) => { setPass(e.target.value) }} placeholder='Enter email' type='password' />
                    </div>                   
            
                    <div>
                        <button type='submit' className="bg-sky-500 w-full text-white p-2 rounded-lg hover:bg-sky-950">Login</button>
                    </div>

                </form>
            </div>

    </div>
  )
}

export default ResetPassPage