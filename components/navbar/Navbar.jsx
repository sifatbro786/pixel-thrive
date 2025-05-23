import MobileMenu from "./MobileMenu";
import NavbarAction from "./NavbarAction";
import NavbarLogo from "./NavbarLogo";
import NavigationLink from "./NavigationLink";

export default function Navbar() {
    return (
        <header className="sticky top-0 w-full bg-zinc-900 border-b border-zinc-800 text-lime-400 shadow-md z-50">
            <div className="mx-auto py-5 px-3 md:px-[90px]">
                <div className="flex items-center h-8 md:h-16">
                    {/* //* Logo */}
                    <NavbarLogo />

                    {/* //* Desktop Navigation - Centered */}
                    <nav className="hidden md:flex items-center justify-center flex-1 gap-x-8">
                        <NavigationLink href={"/"}>Home</NavigationLink>
                        <NavigationLink href={"/services"}>Services</NavigationLink>
                        <NavigationLink href={"/about"}>About</NavigationLink>
                    </nav>

                    {/* //* Navbar Action - Desktop */}
                    <NavbarAction />

                    {/* //* Mobile Menu Button */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
