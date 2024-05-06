"use client";

import { ArrowDown, ArrowUp } from "@/app/_assets/_svgs/svgs";
import React, { useState } from "react";
import { motion } from "framer-motion";

type DataType = {
    data: {
        question: string;
        answer: string;
    };
};

const Dropdown = ({ data }: DataType) => {
    const [isOpen, setIsOpen] = useState(false);

    const stateHandler = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <button className="dropdown" onClick={stateHandler}>
                <h3>{data.question}</h3>
                {isOpen ? <ArrowDown /> : <ArrowUp />}
            </button>
            <motion.p
                className={`text-sm w-7/12 px-32
                ${isOpen ? "py-4" : "py-0"}
                ${isOpen ? "!block" : "!hidden"}`}
            >
                {data.answer}
            </motion.p>
        </div>
    );
};

export default Dropdown;
