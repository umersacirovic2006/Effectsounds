import { ArrowDownWhite, Download, Heart, Play } from "@/app/_assets/_svgs/svgs";
import React from "react";

const Audio = () => {
    return (
        <div className="text-primary flex px-32 py-10">
            <div className="flex item-center ">
                <div className="">
                    <Play />
                </div>
                <div className="name">Sword 1</div>
                <div className="wav"></div>
            </div>
            <div className="right">
                <div className="left">
                    <div className="herts">96Hz</div>
                    <div className="type">WAV</div>
                    <div className="lenght">0.3s</div>
                </div>
                <div className="right">
                    <div className="heart">
                        <Heart />
                    </div>
                    <div className="download">
                        <Download />
                    </div>
                    <div className="morebtn">
                        <ArrowDownWhite />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Audio;
