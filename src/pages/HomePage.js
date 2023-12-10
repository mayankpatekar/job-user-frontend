import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("Ctoken")){
            navigate("/login")
        }

    },[navigate])
  return (
    <div>
        <div className='grid place-content-center h-screen'>
            <h1 className='font-bold text-3xl'>Welcome candidates !</h1>

        </div>
    </div>
  )
}

export default HomePage