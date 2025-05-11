import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {

   const d =useLoaderData();
    return (
        <div>
            <h1>Title : {d.title}</h1>
            <p>Description : {d.body}</p>
        </div>
    );
};

export default Postdetails;