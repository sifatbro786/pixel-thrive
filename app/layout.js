import { Istok_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
    title: "PixelThrive",
    description: "This is an agency website",
};

const istokWeb = Istok_Web({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-istok",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${istokWeb.variable} bg-primary text-white`}>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
