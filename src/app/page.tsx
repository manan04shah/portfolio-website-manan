"use client";

import Landing from "./components/landing";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Contact from "./components/contact";
import { motion, useScroll } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="w-full z-0 overflow-x-hidden">
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="progress-bar"
            />
            <Background />
            <Navbar />
            <Landing />
            <Skills />
            <Contact />
        </div>
    );
}
