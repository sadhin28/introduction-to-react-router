
import { useLoaderData } from 'react-router-dom';
import UserDataCard from '../UsersDataCard/UserDataCard';

const User = () => {
     const data = useLoaderData()
    return (
        <div className=''>
            <h1 className='text-center py-10 font-bold text-2xl md:text-4xl'>Our Users: {data.length}</h1>
           <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
              {
                data.map(userData=><UserDataCard key={data.is} UserData={userData}></UserDataCard>)
            }
           </div>
         
        </div>
    );
};

export default User;