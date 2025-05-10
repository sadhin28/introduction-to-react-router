import { useLoaderData } from "react-router-dom";
import User from "../../assets/User/User";

const Users = () => {
   const user = useLoaderData()
   console.log(user)
    return (
        <div>
            <h2>user : {user.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    user.map(data=><User data={data}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;