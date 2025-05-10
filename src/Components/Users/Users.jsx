import { useLoaderData } from "react-router-dom";

const Users = () => {
   const user = useLoaderData()
    return (
        <div>
            <h2>user : {user.length}</h2>
            <h1>I am User</h1>
        </div>
    );
};

export default Users;