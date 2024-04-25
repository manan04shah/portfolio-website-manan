import React from "react";
import Image from "next/image";

interface SkillBoxProps {
    imageUrl: string;
    skillName: string;
    skillDescription: string;
    onHover: (skillName: string, skillDescription: string, imageUrl: string) => void;
    onMouseLeave: () => void;
}

const SkillBox: React.FC<SkillBoxProps> = ({
    imageUrl,
    skillName,
    skillDescription,
    onHover,
    onMouseLeave,
}) => {
    const handleMouseEnter = () => {
        onHover(skillName, skillDescription, imageUrl);
    };

    const handleMouseLeave = () => {
        onMouseLeave();
    };

    return (
        <div
            className="z-10 relative flex flex-col justify-center items-center group px-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bg-transparent transition-colors duration-500 rounded-lg py-4 px-2 flex flex-col justify-center align-middle items-center w-full h-full">
                <Image
                    src={imageUrl}
                    height={50}
                    width={50}
                    quality={100}
                    alt={`${skillName} icon`}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                />
            </div>
        </div>
    );
};

export default SkillBox;
