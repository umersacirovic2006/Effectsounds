import Link from "next/link";
import React from "react";

const Start = () => {
    return (
        <div className="bg-accent w-full flex justify-center items-center flex-col gap-10 py-20">
            <h1 className="text-primary text-center font-bold text-5xl/tight syne">
                Get access to thousands of <br></br>
                high-quality sound effects today!
            </h1>
            <Link href="?showSignUpDialog=y" className="px-7 py-2 border border-solid border-neutral bg-neutral rounded-full font-semibold text-secondary hover:invert transition-[ease-in-out] syne">
                Start NOW
            </Link>
        </div>
    );
};

export default Start;
