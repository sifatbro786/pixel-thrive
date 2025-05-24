import Image from "next/image";
import TopHeading from "../common/TopHeading";
import Stats from "./Stats";
import BannerImage from "@/public/BannerImage.jpg";
import { cn } from "@/lib/utils";

export default function Milestone() {
    return (
        <section
            className={cn(
                "max-w-7xl mx-auto px-3 md:px-0 mt-20 md:mt-[200px] w-full flex flex-col",
            )}
        >
            <TopHeading
                heading={"Milestone"}
                paragraph={
                    "We’ve empowered brands through creative solutions, launching products, growing startups, and delivering lasting digital impact."
                }
            />

            {/* //* stats: */}
            <Stats />

            {/* //* Banner Image: */}
            <div className="w-full h-[240px] md:h-[527px] relative mt-10 md:mt-[60px]">
                <Image
                    src={BannerImage}
                    alt="BannerImage"
                    fill
                    className="object-cover rounded-md"
                />
            </div>
        </section>
    );
}
