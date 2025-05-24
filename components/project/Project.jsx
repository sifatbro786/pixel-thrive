import { cn } from "@/lib/utils";
import TopHeading from "../common/TopHeading";
import ProjectShowcase from "./ProjectShowcase";

export default function Project() {
    return (
        <section
            className={cn(
                "max-w-7xl mx-auto px-3 md:px-0 my-20 md:my-[150px] w-full flex flex-col",
            )}
        >
            <TopHeading
                heading={"Projects"}
                paragraph={
                    "We deliver powerful digital projects that drive results—combining strategy, design, and tech to grow your brand."
                }
            />

            <ProjectShowcase />
        </section>
    );
}
