import Link from "next/link";
import Logo from "../common/Logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-800 bg-fixed mt-20 md:mt-[100px] overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 md:px-0 py-8 md:py-12">
                <div className="flex flex-col md:flex-row items-start justify-center md:justify-between">
                    <div>
                        <Logo />
                        <p className="text-gray-400 mt-2 md:mt-3 mb-6 md:w-[400px] mx-auto text-center md:text-left">
                            Professional digital agency providing comprehensive solutions for your
                            business needs.
                        </p>
                        <div className="flex space-x-4 items-center justify-center md:justify-start">
                            <Link
                                href="#"
                                className="text-secondary/60 hover:text-secondary duration-300"
                            >
                                <Facebook size={20} className="" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-secondary/60 hover:text-secondary duration-300"
                            >
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-secondary/60 hover:text-secondary duration-300"
                            >
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-secondary/60 hover:text-secondary duration-300"
                            >
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-16 mt-16 md:mt-0 items-center md:items-start justify-center md:justify-between mx-auto md:mx-0 text-center md:text-left">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/services/web-design-development"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Website Design & Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/graphics-design"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Graphics Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/video-creation"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        3D/2D Video Creation
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/social-marketing"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Social Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/ui-ux-design"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        UI/UX Design
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/app-development"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        App Development
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-400 hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-400 hover:text-white">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terms-of-service"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-center md:justify-start md:items-start">
                                    <MapPin
                                        size={20}
                                        className="text-gray-400 mr-2 mt-1 flex-shrink-0"
                                    />
                                    <span className="text-gray-400">Dhaka, BD</span>
                                </li>
                                <li className="flex justify-center md:justify-start md:items-start">
                                    <Phone size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                                    <span className="text-gray-400">+1 (123) 456-7890</span>
                                </li>
                                <li className="flex justify-center md:justify-start md:items-start">
                                    <Mail size={20} className="text-gray-400 mr-2 flex-shrink-0" />
                                    <span className="text-gray-400">info@pixelthrive.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-tertiary/50 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} PIXELTHRIVE. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
