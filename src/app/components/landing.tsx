"use client";

import React from "react";
import ImageBlob from "./image-blob";
import Image from "next/image";
import useTypingText from "./typing-effect.js";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// const { word } = useTypingText(['Student', 'Learner', 'Developer'], 130, 20);

export default function Landing() {
    const [word] = useTypewriter({
        words: ["Student", "Learner", "Developer"],
        loop: true,
        typeSpeed: 130,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });

    return (
        <div className="z-10 relative flex h-full w-full flex-col md:flex-row">
            <div className="left-side w-full md:w-[60vw] flex flex-col h-full md:justify-center align-middle p-10 md:order-1 order-2">
                <div
                    className="welcome-box border-solid border-2 w-fit p-2 backdrop-opacity-50 backdrop-blur-lg"
                    style={{
                        background:
                            "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                    }}
                >
                    <p>Welcome to my Portfolio</p>
                </div>
                <div className="highlight-text flex">
                    <h1 className="text-4xl md:text-[4.5vw] font-bold py-5">
                        Hi! I'm Manan - A {word}
                        <Cursor cursorStyle="|" />
                    </h1>
                </div>
                <div className="about-me">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati earum iste et totam, reiciendis iure dolor est
                        illum doloremque quos, magni saepe dolorum
                        exercitationem, in deleniti excepturi inventore tenetur
                        corrupti.
                    </p>
                </div>
                

                <div className="lets-connect flex">
                    <p className="mr-2">Let's Connect</p>
                    <Image
                        src="/arrow.png"
                        width={25}
                        height={25}
                        alt="Arrow"
                    />
                </div>
            </div>
            <div className="right-side w-[90vw] md:w-[40vw] order-1 md:order-2 h-[30vh] md:h-full self-center pt-10">
                <ImageBlob />
            </div>
        </div>
    );
}
