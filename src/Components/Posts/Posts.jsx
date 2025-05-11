import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
    
        <div>
        <h2>Post:{posts.length} </h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
             {
            posts.map(data=><Post key={data.id} data={data}></Post>)
           }
         </div>
        </div>
    );
};

export default Posts;