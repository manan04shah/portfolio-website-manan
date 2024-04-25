import Landing from "./components/landing";
import Background from "./components/background";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
    return (
        <div className="w-full h-dvh z-0">
            <Background />
            <Navbar />
            <Landing />
            <Skills />
            <Contact />
        </div>
    );
}
