import MobileMenu from "./MobileMenu";
import NavbarAction from "./NavbarAction";
import NavbarLogo from "./NavbarLogo";
import NavigationLink from "./NavigationLink";

export default function Navbar() {
    return (
        <header className="bg-gradient-to-r from-lime-900 to-slate-900 sticky top-0 z-50 border-b">
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
