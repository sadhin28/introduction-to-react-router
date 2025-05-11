import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const data = useLoaderData();
   const {name,email}=data;
   const navigate = useNavigate();
   const userGoback=()=>{
      navigate(-1)
   }
    return (
        <div className='border-4 p-5 rounded-2xl text-2xl font-black'>
             <h1 className=''>Name: {name}</h1>
             <h2>Email: {email}</h2>
             <button  onClick={userGoback} className='btn mt-4 bg-amber-900 text-white text-sm border-2 p-2 rounded-tl-2xl hover:shadow-2xs hover:bg-black hover:text-white rounded-br-2xl'>Go back</button>
        </div>
    );
};

export default UserDetails;