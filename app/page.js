import HeroSection from "@/components/hero/HeroSection";
import Marq from "@/components/marq/Marq";
import Milestone from "@/components/milestone/Milestone";
import Project from "@/components/project/Project";
import Service from "@/components/service/Service";
import Team from "@/components/team/Team";

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
            <Project />
            <Team />
        </>
    );
}
