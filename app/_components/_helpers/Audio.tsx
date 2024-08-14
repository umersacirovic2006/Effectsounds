"use client";

import {
    ArrowDownWhite,
    Download,
    Heart,
    Play,
} from "@/app/_assets/_svgs/svgs";
import React, { useEffect, useRef, useState } from "react";

const Audio = () => {
    const [blob, setBlob] = useState<Blob>();
    const visualizerRef = useRef<HTMLCanvasElement>(null);
    const [fileUrl, setFileUrl] = useState("");

    useEffect(() => {
        const fetchFile = async () => {
            const response = await fetch("../../_assets/sample.wav");
            const arrayBuffer = await response.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: "audio/wav" });
            setBlob(blob);
            setFileUrl(URL.createObjectURL(blob));
        };

        fetchFile();
    }, []);

    return (
        <div className="text-primary flex px-32 py-10">
            <div className="flex item-center">
                <div className="flex item-center justify-center">
                    <Play />
                    <div className="name">Sword 1</div>
                </div>
                {/* <div className="wav">
                    {blob && (
                    )}
                </div> */}
            </div>
            <div className="flex gap-16">
                <div className="flex gap-10">
                    <div className="herts">96Hz</div>
                    <div className="type">WAV</div>
                    <div className="lenght">0.3s</div>
                </div>
                <div className="flex gap-10">
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
