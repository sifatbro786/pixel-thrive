import Marquee from "react-fast-marquee";

const messages = ["Discuss your ideas", "Enrich your goal", "Collaborate & create"];

export default function Marq() {
    return (
        <div className="py-5 md:py-16 px-3 md:px-20 my-16 md:my-40 w-full bg-neutral-900 shadow-[1px_1px_54px_24px_rgba(0,0,0,1.00)]">
            <Marquee
                speed={140}
                autoFill
                gradient
                gradientColor="rgb(23,23,23)"
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
    );
}
