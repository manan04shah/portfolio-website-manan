"use client";

import React, { useState, useEffect } from "react";
import SkillBox from "./skill-box";
import Image from "next/image";

interface SkillInfo {
    name: string;
    description: string;
    imageUrl: string;
}

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<SkillInfo | null>(null);

    const handleHover = (
        skillName: string,
        skillDescription: string,
        imageUrl: string
    ) => {
        setHoveredSkill({
            name: skillName,
            description: skillDescription,
            imageUrl: imageUrl,
        });
    };

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    };

    return (
        <div className="z-10 relative flex p-6 mt-10 md:flex-row flex-col" id="skills">
            <div className="relative z-10 flex flex-col justify-start items-baseline w-full order-2 md:order-1 md:w-[60vw] p-4">
                <h1 className="font-semibold">Languages</h1>
                <div className="languages flex flex-wrap">
                    <SkillBox
                        imageUrl="/html.svg"
                        skillName="HTML"
                        skillDescription="A markup language for creating web pages"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/css.svg"
                        skillName="CSS"
                        skillDescription="A style sheet language for styling web pages"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/typescript.svg"
                        skillName="TypeScript"
                        skillDescription="A superset of JavaScript that adds optional static typing"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/python.svg"
                        skillName="Python"
                        skillDescription="A high-level, general-purpose programming language"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/go.svg"
                        skillName="Go (GoLang)"
                        skillDescription="An open-source programming language designed for simplicity and efficiency"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/c.svg"
                        skillName="C"
                        skillDescription="A low-level, procedural programming language"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/cpp.svg"
                        skillName="C++"
                        skillDescription="An extension of the C programming language"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/java.svg"
                        skillName="Java"
                        skillDescription="A class-based, object-oriented programming language"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <h1 className="font-semibold">Frameworks</h1>
                <div className="languages flex flex-wrap">
                    <SkillBox
                        imageUrl="/react.svg"
                        skillName="React.js"
                        skillDescription="A JavaScript library for building user interfaces"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/next-js.svg"
                        skillName="Next.js"
                        skillDescription="A React framework for building server-side rendered and static web applications"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/tailwindcss.svg"
                        skillName="Tailwind CSS"
                        skillDescription="A utility-first CSS framework for rapidly building custom user interfaces"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/nodejs.svg"
                        skillName="Node.js"
                        skillDescription="A JavaScript runtime built on Chrome's V8 JavaScript engine"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/django.svg"
                        skillName="Django"
                        skillDescription="A high-level Python web framework that encourages rapid development and clean, pragmatic design"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/flask.svg"
                        skillName="Flask"
                        skillDescription="A lightweight Python web framework that is easy to get started with and provides tools for building web applications"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/fastapi.svg"
                        skillName="FastAPI"
                        skillDescription="A modern, fast (high-performance) web framework for building APIs with Python"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <h1 className="font-semibold">Databases</h1>
                <div className="languages flex flex-wrap">
                    <SkillBox
                        imageUrl="/mysql.svg"
                        skillName="MySQL"
                        skillDescription="An open-source relational database management system (RDBMS)"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/postgresql.svg"
                        skillName="PostgreSQL"
                        skillDescription="An open-source object-relational database system that uses and extends the SQL language"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/mongodb.svg"
                        skillName="MongoDB"
                        skillDescription="A cross-platform document-oriented NoSQL database program"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <h1 className="font-semibold">Others</h1>
                <div className="languages flex flex-wrap">
                    <SkillBox
                        imageUrl="/tensorflow.svg"
                        skillName="TensorFlow"
                        skillDescription="An open-source machine learning library for building and deploying models"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/pytorch.svg"
                        skillName="PyTorch"
                        skillDescription="An open-source machine learning library based on the Torch library for Python"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                    <SkillBox
                        imageUrl="/r.svg"
                        skillName="R"
                        skillDescription="A programming language and software environment for statistical computing and graphics"
                        onHover={handleHover}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
            <div className="w-full md:w-[40vw] order-1 md:order-2 p-4 rounded-lg z-10 relative flex flex-col justify-center items-center">
                {hoveredSkill ? (
                    <>
                        <Image
                            src={hoveredSkill.imageUrl}
                            height={100}
                            width={100}
                            quality={100}
                            alt="Icon"
                            className="py-4"
                        />
                        <h2 className="text-4xl font-bold">
                            {hoveredSkill.name}
                        </h2>
                        <p className="py-2">{hoveredSkill.description}</p>
                    </>
                ) : (
                    <div className='border-t-2 border-b-2 w-full p-4 flex justify-between'>
                        <div className="w-2/3">
                            <h1 className="font-serif font-extrabold text-4xl md:text-6xl">My</h1>
                            <h1 className="font-serif font-bold text-6xl md:text-8xl">Skills</h1>
                            <h1 className="text-sm md:text-md">Hover on a skill for more information.</h1>
                        </div>
                        <Image src="/coding.svg" height={100} width={100} quality={100} alt="coder image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;
