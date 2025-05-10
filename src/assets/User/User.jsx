import React from 'react';

const User = ({data}) => {
    const {naem,id,email,phone}=data
    return (
        <div className='border mb-5 font-bold text-2xl p-4 rounded-2xl '>
            <h2>Name : {data.name}</h2>
            <h2>Email : {email}</h2>
        </div>
    );
};

export default User;