import Link from "next/link";

export default function NavbarLogo() {
    return (
        <Link href={"/"} className="flex items-center">
            <h2 className="flex items-center text-tertiary font-bold text-[22px] md:text-3xl">
                PixelThrive
            </h2>
        </Link>
    );
}
