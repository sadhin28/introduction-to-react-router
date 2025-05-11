import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {

   const d =useLoaderData();
    return (
        <div className='border-4 p-5 rounded-2xl  text-2xl '>
            <h1 className='text-sm font-black'>Title : {d.title}</h1>
            <p className='text-sm'>Description : {d.body}</p>
        </div>
    );
};

export default Postdetails;