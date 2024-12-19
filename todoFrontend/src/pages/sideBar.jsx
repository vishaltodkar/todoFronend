import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-64 bg-blue-600 text-white p-4'>
            <h2 className='text-2xl mb-2'>Dashboard </h2>
            <ul>
                <li> <Link to="/users" className='block py-2'>Users </Link></li>
                <li><Link to="/profile" className='block py-2'>Profile</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar