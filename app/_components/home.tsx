import React from "react";
import Hero from "./hero";
import Catagories from "./catagories";
import FAQ from "./faq";
import Start from "./start";


const HomePage = () => {
    return (
        <div className="w-full">
            <Hero />
            <Catagories />
            <FAQ />
            <Start />
        </div>
    );
};

export default HomePage;
