import React from "react";

const RecCategories = () => {
    return (
        <div className="w-full flex flex-col justify-center gap-6 py-10">
            <div className="px-80 lg:px-96 flex justify-between">
                <h2 className="text-secondary text-xl font-bold syne">
                    Recommended Categories
                </h2>
            </div>
            <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,1fr)] gap-2 px-80 lg:px-96 w-full h-full">
                <div className="rec-card bg-[url(/rain.png)]">
                    <h3 className="text-primary text-2xl syne">Ambient</h3>
                </div>
                <div className="rec-card bg-[url(/wind.png)]">
                    <h3 className="text-primary text-2xl syne">Wind</h3>
                </div>
                <div className="rec-card bg-[url(/swoosh.png)]">
                    <h3 className="text-primary text-2xl syne">Swoosh</h3>
                </div>
                <div className="rec-card bg-[url(/explosion.png)]">
                    <h3 className="text-primary text-2xl syne">Explosion</h3>
                </div>
                <div className="rec-card bg-[url(/gun.png)]">
                    <h3 className="text-primary text-2xl syne">Gun</h3>
                </div>
                <div className="rec-card bg-[url(/medieval.png)]">
                    <h3 className="text-primary text-2xl syne">Medieval</h3>
                </div>
            </div>
        </div>
    );
};

export default RecCategories;
