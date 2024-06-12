import Image from "next/image";
import React from "react";
import bg from "../_assets/_svgs/background.svg";
import { ArrowRight } from "../_assets/_svgs/svgs";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="bg-secondary flex flex-col justify-center items-center w-full h-4/6 pt-16 pb-10">
            <Image
                src={bg}
                alt="Effectsounds Logo"
                className="absolute w-3/6 h-96 opacity-20"
                priority
            />
            <div className="hero-text relative flex flex-col items-center h-72">
                <h3 className="text-[#6E6F86] text-center">
                    Get Access to Thousands of High-Quality Sound Effects
                </h3>
                <h2 className="text-6xl text-center text-primary font-semibold syne pt-6 pb-16">
                    Elevate your projects <br></br> to the next level
                </h2>
                <Link href='?showDialog=y' className="btn-secondary flex items-center justify-center gap-2 h-20 w-60 syne">
                    Get started
                    <ArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
