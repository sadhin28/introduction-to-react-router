import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {

   const d =useLoaderData();
   const navigate = useNavigate();
      const handeGoback =()=>{
       navigate(-1)
   }
    return (
        <div className='border-4 p-5 rounded-2xl  text-2xl '>
            <h1 className='text-sm font-black'>Title : {d.title}</h1>
            <p className='text-sm'>Description : {d.body}</p>
            <button  onClick={handeGoback} className='btn btn mt-4 bg-amber-900 text-white text-sm border-2 p-2 rounded-tl-2xl hover:shadow-2xs hover:bg-black hover:text-white rounded-br-2xl'>Go Back</button>
        </div>
    );
};

export default Postdetails;