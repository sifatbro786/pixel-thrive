import { cn } from "@/lib/utils";
import TopHeading from "../common/TopHeading";
import ContactShowcase from "./ContactShowcase";

export default function Contact() {
    return (
        <section
            className={cn(
                "max-w-7xl mx-auto px-3 md:px-0 mt-24 md:mt-[200px] overflow-x-hidden",
            )}
        >
            <TopHeading
                heading={"Contact"}
                paragraph={
                    "Reach out to our team today and discover how we can help your business grow with tailored digital strategies."
                }
            />

            <ContactShowcase />
        </section>
    );
}
