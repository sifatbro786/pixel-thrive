import { Istok_Web, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "PixelThrive",
    description: "This is an agency website",
};

//! Fonts:
const playFair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-play",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space",
});

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={cn(
                playFair.className,
                spaceGrotesk.className,
                "bg-primary text-tertiary font-space",
            )}
        >
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
