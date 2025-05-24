import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, slug, description, icon, colorScheme }) {
    //? Color schemes based on the design
    const colorStyles = {
        "light-green": "bg-secondary text-primary",
        "light-gray": "bg-tertiary text-primary",
        dark: "bg-gray-950 text-white",
    };

    //? Title background styles
    const titleStyles = {
        "light-green": "bg-white text-primary",
        "light-gray": "bg-secondary text-primary",
        dark: "bg-primary text-white",
    };

    //? Button styles
    const buttonStyles = {
        "light-green": "bg-primary text-secondary",
        "light-gray": "bg-primary text-secondary",
        dark: "bg-primary text-secondary",
    };

    return (
        <div
            className={`rounded-lg overflow-hidden shadow-lg shadow-[rgba(0,0,0,0.4)] ${colorStyles[colorScheme]}`}
        >
            <div className="p-6 h-full w-full flex flex-col justify-between items-start">
                <h4
                    className={`inline-block text-xl md:text-2xl mx-auto md:mx-0 px-3 md:px-2.5 py-1 md:py-0.5 rounded-md font-bold w-fit ${titleStyles[colorScheme]}`}
                >
                    {title}
                </h4>

                {icon && (
                    <div className="mb-6 flex items-center gap-x-4 mx-auto md:mx-0">
                        <p className="md:lg:xl:text-xl text-justify md:block hidden">
                            {description}
                        </p>
                        <Image
                            src={icon}
                            alt={`${title}-icon`}
                            width={200}
                            height={100}
                            className="object-cover md:lg:xl:py-0 py-5 h-[250px] w-[200px] md:w-auto md:h-auto"
                        />
                    </div>
                )}

                <Link
                    className="flex text-lg md:text-2xl font-semibold md:font-medium items-center gap-x-2 md:gap-x-4 mx-auto md:mx-0 underline underline-offset-4 md:decoration-2 "
                    href={`/services/${slug}`}
                >
                    <button
                        className={`cursor-pointer flex items-center justify-center w-7 md:w-10 h-7 md:h-10 rounded-full ${buttonStyles[colorScheme]}`}
                    >
                        <ArrowUpRight />
                    </button>
                    Learn more
                </Link>
            </div>
        </div>
    );
}
