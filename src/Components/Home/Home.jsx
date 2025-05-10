import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Phone from "../Phone/Phone";

const Home = () => {
    const phone = useLoaderData()
    return (
        <div className="">
            <Header></Header>
             
             <Outlet></Outlet>
             
            <Footer></Footer>
        </div>
    );
};

export default Home;