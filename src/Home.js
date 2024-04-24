import React from "react";
import Navbar from "./component/Navbar";
import "./Home.css";
import SearchBar from "./component/SearchBar";
import Buttons from "./component/Buttons";
import Features from "./component/Features";
const Home = ()=>{
    return(
        <>
        <div className="background">
            <Navbar/>
            <h1 className="Heading">Make My Own AI Song Covers!</h1>
            <h5 className="paragraph">The #1 platform for making high quality AI covers in seconds!</h5>
            <SearchBar/>
            <Buttons/>
        </div>
        <div>
        <Features/>
        </div>
        
        </>
    )
}

export default Home;