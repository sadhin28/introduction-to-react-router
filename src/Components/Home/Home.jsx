import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";

const Home = () => {
     const [product,setproduct]=useState([]);
   
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>{
            setproduct(data)
        })
    },[])
    return (
        <div className="">
            <Header></Header>
             <div className="items-center grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    product.map(phones=><Phone phones={phones}></Phone>)
                }
             </div>
              <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;