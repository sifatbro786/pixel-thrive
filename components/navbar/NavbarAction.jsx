import Link from "next/link";
import { MobileIcon, MobileIcon2 } from "../SVG/SVGIcons";

export default function NavbarAction({ from }) {
    return (
        <div
            className={`${
                from === "mobile"
                    ? "flex flex-col items-center justify-center gap-y-6 mt-12"
                    : "hidden md:flex md:flex-row items-center gap-x-5"
            }`}
        >
            <div className="flex items-center justify-center gap-x-2">
                {from === "mobile" ? <MobileIcon2 /> : <MobileIcon />}
                <p
                    className={`${
                        from === "mobile" ? "text-yellow-500 text-xl font-medium" : "text-stone-100"
                    }`}
                >
                    01533504728
                </p>
            </div>
            <button className={`${from === "mobile" ? "px-16 text-lg" : "px-10"} py-2 bg-transparent text-secondary border border-secondary hover:border-secondary rounded-lg font-bold hover:bg-secondary hover:text-primary cursor-pointer transform hover:-translate-y-1 transition duration-400`}>
                Get Started
            </button>
        </div>
    );
}
