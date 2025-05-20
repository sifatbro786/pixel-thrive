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
                        from === "mobile" ? "text-primary text-2xl font-medium" : "text-white"
                    }`}
                >
                    01533504728
                </p>
            </div>
            <Link
                href={"/"}
                className={`${
                    from === "mobile"
                        ? "py-3 px-[90px] rounded-[40px] border-1 border-primary text-center text-primary"
                        : "py-3 px-[30px] rounded-[50px] border-1 border-secondary text-center text-secondary"
                } font-semibold leading-tight text-xl hover:bg-secondary hover:text-primary duration-400`}
            >
                Get Started
            </Link>
        </div>
    );
}
