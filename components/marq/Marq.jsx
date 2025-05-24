import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Star from "@/public/star.svg";

const messages = ["Discuss your ideas", "Enrich your goal", "Collaborate & create"];

export default function Marq() {
    return (
        <>
            <div
                className={cn(
                    "py-5 md:py-[50px] px-3 md:px-20 mt-16 md:mt-40 w-full bg-gray-900 shadow-[1px_1px_54px_24px_rgba(0,0,0,0.4)]",
                )}
            >
                <Marquee
                    speed={140}
                    autoFill
                    gradient
                    gradientColor="rgb(15, 23,42)"
                    gradientWidth={150}
                    className="overflow-hidden"
                >
                    {messages.map((text, i) => (
                        <h3
                            key={i}
                            className="font-play mx-6 md:mx-20 text-secondary text-3xl md:text-6xl font-light uppercase tracking-[0.1em] md:tracking-[0.3em] whitespace-nowrap"
                        >
                            {text}
                        </h3>
                    ))}
                </Marquee>
            </div>
            <div className="w-10 md:w-14 h-10 md:h-14 mx-auto relative mt-8 md:mt-[40px]">
                <Image src={Star} alt="star-icon" fill />
            </div>
        </>
    );
}
