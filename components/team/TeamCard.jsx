import Man1 from "@/public/man1.jpg";
import Man2 from "@/public/man2.jpg";
import Man3 from "@/public/man3.jpg";
import Man4 from "@/public/man4.jpg";

import { AnimatedTeams } from "./animated-teams";

export function TeamCard() {
    const testimonials = [
        {
            quote: "Expert in software sales with a strong focus on client needs, delivering tailored solutions that drive business growth.",
            name: "Zahir",
            designation: "Software Seller",
            src: Man3,
        },
        {
            quote: "Builds and maintains both front-end and back-end systems, ensuring seamless user experiences and robust functionality.",
            name: "Ishaq ahmed",
            designation: "Full Stack Developer",
            src: Man1,
        },
        {
            quote: "Crafts and maintains the server-side logic, databases, and APIs that power our applications—ensuring everything runs smoothly.",
            name: "Sagor Khan",
            designation: "Backend Developer",
            src: Man2,
        },
        {
            quote: "Crafts seamless, responsive user interfaces with a focus on performance, accessibility, seo and seamless user experience.",
            name: "Solaiman Sifat",
            designation: "Frontend Developer",
            src: Man4,
        },
    ];
    return <AnimatedTeams testimonials={testimonials} />;
}
