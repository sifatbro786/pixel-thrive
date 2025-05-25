import { cn } from "@/lib/utils";
import TopHeading from "../common/TopHeading";
import WorkProgress from "./WorkProgress";

export default function Question() {
    return (
        <section className={cn("max-w-7xl mx-auto px-3 md:px-0 mt-24 md:mt-[180px]")}>
            <TopHeading
                heading={"Our Working Process"}
                paragraph={
                    "Our working process is streamlined, transparent, and results-driven—focused on collaboration and measurable growth."
                }
            />

            <WorkProgress />
        </section>
    );
}
