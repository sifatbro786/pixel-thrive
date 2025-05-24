import { getAllServices } from "@/utils/data";
import ServiceCard from "./ServiceCard";

export default function ServiceList({ showAll }) {
    const services = getAllServices();

    const displayServices = showAll ? services : services.slice(0, 6);

    const colorSchemes = [
        "light-gray", // Web Design
        "light-green", // SEO
        "dark", // Video Editing
        "light-gray", // Graphics Design
        "light-green", // Content Creation
        "dark", // Mobile App Development
    ];

    return (
        <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 md:gap-x-8 gap-y-10 md:gap-y-14 mt-10 md:mt-[80px]">
            {displayServices.length > 0 ? (
                displayServices.map(({ title, slug, shortDescription, icon }, index) => (
                    <ServiceCard
                        key={slug}
                        title={title}
                        description={shortDescription}
                        icon={icon}
                        slug={slug}
                        colorScheme={colorSchemes[index % colorSchemes.length]}
                    />
                ))
            ) : (
                <p className="text-center text-3xl text-red-500 font-semibold">
                    No services available
                </p>
            )}
        </div>
    );
}
