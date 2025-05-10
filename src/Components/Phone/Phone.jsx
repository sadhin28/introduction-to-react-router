
const Phone = ({phones}) => {
    const {name,image,price,description}=phones
   console.log(phones)
    return (
        <div>
            <div className="card bg-base-600 not-visited:shadow-sm flex">
            <img className=' w-50 h-50 p-3 mx-auto mt-5' src={image} alt="" />
            <div className='flex-grow mb-3 p-3 text-start font-bold'>
                <h1 className='card-title text-xl lg:text-2xl'>{name}</h1>
                <p>Price : {price}</p>
                <p>Description : {description}</p>
                
            </div>
            <div className='text-start p-3 '>
                <button  className='hover text-xl lg:text-2xl btn font-bold bg-black text-white mb-5 w-full'>Add To Cart</button>
                
            </div>
        </div>
        </div>
    );
};

export default Phone;