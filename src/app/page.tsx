import Image from "next/image";
import Landing from "./components/landing";
import Background from "./components/background";
import Navbar from "./components/navbar";

export default function Home() {
    return (
        <div className="w-full h-dvh z-0">
            <Background />
            <Navbar />
            <Landing />
        </div>
    );
}
