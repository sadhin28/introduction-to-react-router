
import { Link } from 'react-router-dom';

const UserDataCard = ({UserData}) => {
    const {name,id,email,phone}=UserData
    return (
        <div className='text-3xl font-bold border-2 p-5 rounded-2xl border-amber-700 mb-3'>
           <h2>Name:{name} </h2>
           <h2>Email: {email}</h2>
           <h2>Phone: {phone}</h2>
           <Link></Link>
        </div>
    );
};

export default UserDataCard;