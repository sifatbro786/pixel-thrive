"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileNavigation from "./MobileNavigation";

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className="md:hidden flex items-center ml-auto">
                <button className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* //! Mobile Navigation - Sidebar */}
            <MobileNavigation
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </>
    );
}
