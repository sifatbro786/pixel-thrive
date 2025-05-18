import Link from "next/link";

export default function NavbarLogo() {
    return (
        <Link href={"/"} className="flex items-center">
            <h2 className="flex text-white items-center font-bold text-2xl md:text-3xl">
                PixelThrive
            </h2>
        </Link>
    );
}
