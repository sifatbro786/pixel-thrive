import { cn } from "@/lib/utils";
import TopHeading from "../common/TopHeading";
import { TeamCard } from "./TeamCard";

export default function Team() {
    return (
        <section
            className={cn(
                "max-w-7xl mx-auto px-3 md:px-0 mt-20 md:mt-[200px] w-full flex flex-col",
            )}
        >
            <TopHeading
                heading={"Teams"}
                paragraph={
                    "Our team blends creativity, strategy, and tech skills to deliver impactful digital marketing results for clients."
                }
            />

            <TeamCard />
        </section>
    );
}
