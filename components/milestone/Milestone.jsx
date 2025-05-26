import TopHeading from "../common/TopHeading";
import Stats from "./Stats";
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
            <div className="w-full h-[240px] md:h-[527px] relative mt-10 md:mt-[60px] rounded-md overflow-hidden">
                <video
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    
                />
            </div>
        </section>
    );
}
