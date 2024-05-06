import React from "react";
import { ArrowRight } from "../_assets/_svgs/svgs";

const Plans = () => {
    return (
        <div className="bg-secondary py-10 flex flex-col items-center">
            <h2 className="text-center text-primary text-4xl font-bold syne">
                Get Access to Thousands of <br /> High-Quality Sound Effects
            </h2>
            <div className="flex justify-center items-center py-10 gap-10 text-center">
                <div className="py-10 px-16 bg-primary rounded-3xl">
                    <p className="font-bold">10 DOWNLOADS</p>
                    <p className="font-bold py-4 text-6xl syne">$7</p>
                    <div className="py-5 flex flex-col gap-2">
                        <p>6 months</p>
                        <p>unlimited downloads</p>
                        <p>Unlimited licence</p>
                    </div>
                    <button className="btn-secondary !border-black !bg-primary flex items-center gap-2 py-4">
                        Get started
                        <ArrowRight />
                    </button>
                </div>
                <div className="py-10 px-16 bg-neutral rounded-3xl">
                    <p className="font-bold">SEMI ANNUAL</p>
                    <p className="font-bold py-4 text-6xl syne">$29</p>
                    <div className="py-5 flex flex-col gap-2">
                        <p>6 months</p>
                        <p>unlimited downloads</p>
                        <p>Unlimited licence</p>
                    </div>
                    <button className="btn-secondary !border-black flex items-center gap-2 py-4">
                        Get started
                        <ArrowRight />
                    </button>
                </div>
                <div className="py-10 px-16 bg-primary rounded-3xl">
                    <p className="font-bold">ANNUAL</p>
                    <p className="font-bold py-4 text-6xl syne">$49</p>
                    <div className="py-5 flex flex-col gap-2">
                        <p>6 months</p>
                        <p>unlimited downloads</p>
                        <p>Unlimited licence</p>
                    </div>
                    <button className="btn-secondary !border-black !bg-primary flex items-center gap-2 py-4">
                        Get started
                        <ArrowRight />
                    </button>
                </div>
            </div>
            <button className="btn-secondary !bg-primary flex items-center gap-2 py-4">
                Get started for free
                <ArrowRight />
            </button>
        </div>
    );
};

export default Plans;
