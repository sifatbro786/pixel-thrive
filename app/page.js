import HeroSection from "@/components/hero/HeroSection";

export const metadata = {
    title: "PixelThrive | Home",
    description: "This is an agency website",
};

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <HeroSection />
        </div>
    );
}
