import React from "react";
import Dropdown from "./_helpers/Dropdown";

const FAQ = () => {
    const questions = [
        {
            question: "How many sounds I can download?",
            answer: "Yes. With a paid account, you can download as many creative assets as you need. Just remember that subscriptions only cover a single user and we don’t allow automatic downloading tools.",
        },
        {
            question: "How many sounds I can download?",
            answer: "Yes. With a paid account, you can download as many creative assets as you need. Just remember that subscriptions only cover a single user and we don’t allow automatic downloading tools.",
        },
        {
            question: "How many sounds I can download?",
            answer: "Yes. With a paid account, you can download as many creative assets as you need. Just remember that subscriptions only cover a single user and we don’t allow automatic downloading tools.",
        },
        {
            question: "How many sounds I can download?",
            answer: "Yes. With a paid account, you can download as many creative assets as you need. Just remember that subscriptions only cover a single user and we don’t allow automatic downloading tools.",
        },
        {
            question: "How many sounds I can download?",
            answer: "Yes. With a paid account, you can download as many creative assets as you need. Just remember that subscriptions only cover a single user and we don’t allow automatic downloading tools.",
        },
    ];

    return (
        <div className="w-full bg-secondary pt-20">
            <h2 className="text-primary text-4xl text-center font-bold syne">
                Frequently asked questions
            </h2>
            <div className="flex justify-center items-center text-primary flex-col gap-2 py-10">
                {questions.map((question, index) => (
                    <Dropdown key={index} data={question} />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
