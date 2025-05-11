import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {
    const a = useLoaderData();
   
    return (
        <div>
           <h1>{a.title}</h1>
        </div>
    );
};

export default Postdetails;