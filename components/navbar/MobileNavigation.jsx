import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import NavbarAction from "./NavbarAction";
import NavigationLink from "./NavigationLink";

export default function MobileNavigation({ toggleMenu, isMenuOpen, setIsMenuOpen }) {
    const sidebarVariants = {
        closed: {
            x: "100%",
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.2, delay: 0.1 },
                when: "beforeChildren",
                staggerChildren: 0.08,
                staggerDirection: 1,
            },
        },
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            x: 40,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <>
                    {/* //* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-primary/10 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleMenu}
                    />

                    {/* //* Sidebar */}
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-full max-w-full bg-primary text-tertiary z-50 flex flex-col"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                    >
                        <div className="flex justify-end px-3 pt-[30px] pb-4">
                            <button onClick={toggleMenu} aria-label="Close menu">
                                <X size={28} className="text-tertiary" />
                            </button>
                        </div>

                        <div className="flex flex-col p-4 space-y-6">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/services", label: "Services" },
                                { href: "/about", label: "About" },
                            ].map((item) => (
                                <motion.div key={item.href} variants={itemVariants}>
                                    <NavigationLink
                                        from={"mobile"}
                                        href={item.href}
                                        onSmash={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </NavigationLink>
                                </motion.div>
                            ))}

                            <motion.div variants={itemVariants}>
                                <NavbarAction from={"mobile"} />
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
