import { cn } from "@/lib/utils";
import TopHeading from "../common/TopHeading";

export default function Contact() {
    return (
        <section className={cn("max-w-7xl mx-auto px-3 md:px-0 my-20 md:my-[200px]")}>
            <TopHeading
                heading={"Contact"}
                paragraph={
                    "Reach out to our team today and discover how we can help your business grow with tailored digital strategies."
                }
            />

            
        </section>
    );
}
