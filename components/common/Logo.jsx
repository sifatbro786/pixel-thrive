import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"} className="flex items-center justify-center md:justify-start">
            <h2 className="flex items-center text-tertiary font-bold text-[22px] md:text-3xl">
                <span className="text-secondary">Pixel</span>Thrive
            </h2>
        </Link>
    );
}
