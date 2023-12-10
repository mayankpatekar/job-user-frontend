import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogOut =()=>{
        localStorage.removeItem('Ctoken');
        window.location.reload();
        navigate('/login');
    }
    return (
        <div>
            <nav className='flex justify-around p-4 bg-slate-900 text-white'>
                <Link className="hover:text-blue-500" to="/">
                    Home
                </Link>
                <Link className="hover:text-blue-500" to='/jobs'>
                    Jobs
                </Link>
                <Link className="hover:text-blue-500" to='/applications'>
                    Applications
                </Link>
                <button className="hover:text-blue-500" onClick={handleLogOut}>
                    Logout
                </button>
                {/* <Link className="hover:text-blue-500" >
                
                </Link> */}
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar