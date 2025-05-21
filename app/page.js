import HeroSection from "@/components/hero/HeroSection";
import Milestone from "@/components/milestone/Milestone";

export const metadata = {
    title: "PixelThrive | Home",
    description: "This is an agency website",
};

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-3 md:px-0">
            <HeroSection />
            <Milestone />
        </div>
    );
}
