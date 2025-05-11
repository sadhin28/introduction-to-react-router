import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const navigation =useNavigation();
    return (
        <div>
           <Header></Header><br /><br />
           <div className="">
            {
              navigation.state === 'loading' ?
               <div className="w-50  mx-auto"><span className=" w-20 loading loading-bars "></span></div>
               :<Outlet></Outlet>
           }
           </div>
         
           
        </div>
    );
};

export default Home;