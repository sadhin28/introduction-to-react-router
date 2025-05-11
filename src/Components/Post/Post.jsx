import { Link } from 'react-router-dom';


const Post = ({datas}) => {
    const {id,title,body,}=datas
    return (
        <div className='border-4 p-5 rounded-2xl  text-xl font-black'>
            <h1>Title: {title}</h1>
            <p className='text-sm text-justify'>{body}</p>
            <Link className='btn mt-4 bg-amber-900 text-white text-sm border-2 p-2 rounded-tl-2xl hover:shadow-2xs hover:bg-black hover:text-white rounded-br-2xl' to={`post`}>Post Details</Link>
        </div>
    );
};

export default Post;