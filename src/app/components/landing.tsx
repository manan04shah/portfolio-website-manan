"use client";

import React from "react";
import ImageBlob from "./image-blob";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { saveAs } from 'file-saver';

export default function Landing() {
    const [word] = useTypewriter({
        words: ["Student", "Learner", "Developer"],
        loop: true,
        typeSpeed: 130,
        deleteSpeed: 50,
        delaySpeed: 2000,
    });

    const downloadResume = () => {
        saveAs(
            "/mananShahResume22042024.pdf",
            "MananShahResume.pdf"
        );
    };

    return (
        
        <div className="z-10 relative flex h-full w-full flex-col md:flex-row pt-[10vh]">
            <div className="left-side w-full md:w-[60vw] flex flex-col h-full md:justify-center align-middle p-10 md:order-1 order-2">
                <div
                    className="hidden md:block welcome-box border-solid border-2 w-fit p-2"
                    style={{
                        background:
                            "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                    }}
                >
                    <p>Welcome to my Portfolio</p>
                </div>
                <div className="highlight-text flex">
                    <h1 className="text-3xl md:text-[4.5vw] font-bold pb-5 md:py-5 leading-snug">
                        Hi! I&apos;m Manan - A<br></br>
                        {word}
                        <Cursor cursorStyle="|" />
                    </h1>
                </div>
                <div className="about-me" id="about">
                    <p>
                        I specialize in Full Stack Development, with a keen
                        interest in Machine Learning and Artificial
                        Intelligence.<br></br>
                        <br></br>I thrive on the exhilarating pace of change.
                        What sets me apart? A relentless thirst for knowledge.
                        In a world where staying stagnant is a recipe for
                        obsolescence, I aim to constantly keep moving, keep
                        adapting, and most importantly - keep learning and
                        growing.
                    </p>
                </div>

                <div className="download flex mt-10 cursor-pointer underline" onClick={downloadResume}>
                    <p className="mr-2 font-bold">Download my resume</p>
                    <Image
                        src="/download.svg"
                        width={15}
                        height={15}
                        alt="Arrow"
                    />
                </div>
            </div>
            <div className="right-side w-[90vw] md:w-[40vw] order-1 md:order-2 h-[30vh] md:h-full self-center">
                <ImageBlob />
            </div>
        </div>
    );
}
