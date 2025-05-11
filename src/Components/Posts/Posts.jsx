import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
    
        <div>
        <h2 className="text-center py-10 font-bold text-2xl md:text-4xl">Post:{posts.length} </h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
             {
            posts.map(datas=><Post key={datas.id} datas={datas}></Post>)
           }
         </div>
        </div>
    );
};

export default Posts;