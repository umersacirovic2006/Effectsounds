import Image from "next/image";
import React from "react";
import bg from "../_assets/_svgs/background.svg";

const Hero = () => {
    return (
        <div className="bg-secondary flex flex-col justify-center items-center w-full h-4/6 pt-16 pb-10">
            <Image
                src={bg}
                alt="Effectsounds Logo"
                className="absolute w-3/6 h-96 opacity-20"
                // width={1000}
                // height={24}
                priority
            />
            <div className="hero-text relative flex flex-col items-center h-72">
                <h3 className="text-[#6E6F86] text-center">
                    Get Access to Thousands of High-Quality Sound Effects
                </h3>
                <h2 className="text-6xl text-center text-primary font-semibold syne pt-6 pb-16">
                    Elevate your projects <br></br> to the next level
                </h2>
                <button className="btn-secondary flex items-center justify-center gap-2 h-20 w-60 syne">
                    Get started
                    <svg
                        width="22"
                        height="20"
                        viewBox="0 0 22 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.7075 19.6053C11.4595 19.3421 11.3355 19.0278 11.3355 18.6623C11.3355 18.2968 11.4457 17.9971 11.6661 17.7632L17.7424 11.3158H1.24006C0.881823 11.3158 0.585586 11.1915 0.351351 10.943C0.117117 10.6944 0 10.3801 0 10C0 9.61988 0.117117 9.30556 0.351351 9.05702C0.585586 8.80848 0.881823 8.68421 1.24006 8.68421H17.7424L11.6248 2.19298C11.3768 1.92982 11.2597 1.62281 11.2734 1.27193C11.2872 0.921053 11.4181 0.614035 11.6661 0.350877C11.9141 0.116959 12.2104 0 12.5548 0C12.8993 0 13.1818 0.116959 13.4022 0.350877L21.628 9.07895C21.7658 9.22515 21.8622 9.37134 21.9173 9.51754C21.9724 9.66374 22 9.82456 22 10C22 10.1754 21.9724 10.3363 21.9173 10.4825C21.8622 10.6287 21.7658 10.7749 21.628 10.9211L13.4436 19.6053C13.1955 19.8684 12.9062 20 12.5755 20C12.2448 20 11.9555 19.8684 11.7075 19.6053Z"
                            fill="#14141C"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Hero;
