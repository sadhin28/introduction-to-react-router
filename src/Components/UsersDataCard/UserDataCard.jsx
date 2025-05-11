
import { Link } from 'react-router-dom';

const UserDataCard = ({UserData}) => {
    const {name,id,email,phone}=UserData
    return (
        <div className=' text-2xl border-2 p-5 rounded-2xl border-amber-700 mb-3'>
           <h2 className='font-black'>Name:{name} </h2>
           <h2>Email: {email}</h2>
           <h2>Phone: {phone}</h2>
           <Link className='btn mt-5 bg-amber-900 text-white text-sm border-2 p-2 rounded-tl-2xl hover:shadow-2xs hover:bg-black hover:text-white rounded-br-2xl' to={`/UserData/${id}`}>Show Details</Link>
        </div>
    );
};

export default UserDataCard;