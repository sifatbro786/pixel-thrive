import HeroSection from "@/components/hero/HeroSection";
import Marq from "@/components/marq/Marq";
import Milestone from "@/components/milestone/Milestone";
import Service from "@/components/service/Service";

export const metadata = {
    title: "PixelThrive | Home",
    description: "This is an agency website",
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <Milestone />
            <Marq />
            <Service />
        </>
    );
}
