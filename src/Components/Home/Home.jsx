import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <h2 className="text-center text-3xl font-bold">His is the home Component</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;