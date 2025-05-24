import { cn } from "@/lib/utils";
import TopHeading from "../common/TopHeading";
import ServiceList from "./ServiceList";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Service() {
    return (
        <section
            className={cn(
                "max-w-7xl mx-auto px-3 md:px-0 mt-20 md:mt-[150px] w-full flex flex-col"
            )}
        >
            <TopHeading
                heading={"Services"}
                paragraph={
                    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include :"
                }
            />

            <ServiceList showAll={false} />

            {/* //* view all button: */}
            <Link href={"/services"} className="mx-auto mt-8 md:mt-16">
                <Button className={"font-semibold md:text-base"}>View All Services</Button>
            </Link>
        </section>
    );
}
