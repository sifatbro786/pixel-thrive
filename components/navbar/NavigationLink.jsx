"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({ href, onSmash, children, from }) {
    const pathname = usePathname();

    const active = pathname === href;

    let styles;
    if (from === "mobile") {
        if (active) {
            styles =
                "block py-3 text-black hover:text-gray-700 transition-colors text-3xl font-semibold text-center border-b-[3px] border-primary w-fit mx-auto";
        } else {
            styles =
                "block py-3 text-black hover:text-gray-700 transition-colors text-3xl font-semibold text-center";
        }
    } else {
        if (active) {
            styles = "text-secondary font-semibold border-b-2 border-secondary text-xl";
        } else {
            styles = "text-white font-medium hover:text-gray-300 duration-300 text-xl";
        }
    }

    return (
        <Link href={href} onClick={onSmash} className={styles}>
            {children}
        </Link>
    );
}
