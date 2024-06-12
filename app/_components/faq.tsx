import React from "react";
import Dropdown from "./_helpers/Dropdown";

const FAQ = () => {
    const questions = [
        {
          "question": "What licensing options are available for the sound effects on this website?",
          "answer": "We offer various licensing options, including royalty-free, commercial, and personal use licenses. Each sound effect will have its licensing information clearly listed. Please check the specific terms for each sound effect to ensure it meets your needs."
        },
        {
          "question": "Can I use these sound effects in commercial projects?",
          "answer": "Yes, many of our sound effects are available for use in commercial projects. However, it's essential to verify the licensing terms for each sound effect to ensure it includes commercial use rights."
        },
        {
          "question": "How do I download sound effects from your website?",
          "answer": "To download sound effects, browse our collection, select the desired sound effect, and click the download button. You may need to create an account or make a purchase, depending on the sound effect's licensing terms."
        },
        {
          "question": "Are the sound effects available in different file formats?",
          "answer": "Yes, our sound effects are available in various file formats, such as WAV, MP3, and AIFF. The available formats will be listed on the download page for each sound effect."
        },
        {
          "question": "Do I need to credit the website or the creator when using these sound effects?",
          "answer": "Credit requirements depend on the specific licensing terms of each sound effect. Some sound effects require attribution, while others do not. Please refer to the licensing information provided with each sound effect."
        },
        {
          "question": "What should I do if I can't find the sound effect I'm looking for?",
          "answer": "If you can't find the sound effect you're looking for, you can use our search function or browse through our categories. If you're still having trouble, feel free to contact our support team for assistance or consider submitting a request for a custom sound effect."
        },
        {
          "question": "Is there a limit to how many sound effects I can download?",
          "answer": "The download limit varies based on your membership or subscription plan. Free users may have a limited number of downloads per day, while premium subscribers can enjoy unlimited downloads. Please check our pricing page for more details on download limits."
        }
      ];

    return (
        <div className="w-full bg-secondary pt-20" id="faq">
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
