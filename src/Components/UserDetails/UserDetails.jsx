import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const data = useLoaderData();
   const {name,email}=data
    return (
        <div className='border-4 p-5 rounded-2xl text-2xl font-black'>
             <h1 className=''>Name: {name}</h1>
             <h2>Email: {email}</h2>
        </div>
    );
};

export default UserDetails;