import Image from "next/image";
import Landing from "./components/landing";
import Background from "./components/background";

export default function Home() {
    return (
        <div className="w-full h-full z-0">
            <Background />
            <Landing />
        </div>
    );
}
