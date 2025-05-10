import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Phone from "../Phone/Phone";

const Home = () => {
    const phone = useLoaderData()
    return (
        <div className="flex-grow">
            <Header></Header>
             
            <div className="flex-grow">
                  <Outlet></Outlet>
                   <Footer></Footer>
            </div>
             
           
        </div>
    );
};

export default Home;