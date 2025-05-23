import Image from "next/image";
import HeroStar from "@/public/HeroStars.png";

export default function HeroSection() {
    return (
        <div className="max-w-7xl mx-auto px-3 md:px-0 flex flex-col md:flex-row justify-between mt-10 md:mt-[110px]">
            {/* //* left */}
            <div className="md:mt-1">
                <div className="relative font-play">
                    <p
                        className="text-5xl md:text-9xl font-black uppercase tracking-[4.50px] text-center md:text-left bg-clip-text text-transparent overflow-hidden"
                        style={{
                            backgroundImage: `url('https://img.freepik.com/premium-photo/modern-office-space-with-creative-twist_343170-33885.jpg?uid=R145339866&ga=GA1.1.1561507910.1747828804&semt=ais_hybrid&w=740')`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        C<span>reative Agency</span>
                    </p>

                    <div>
                        <div className="hidden md:block w-3.5 h-3.5 bg-secondary rounded-full absolute top-[-5px] left-5"></div>
                        <div className="hidden md:block w-3.5 h-3.5 bg-secondary rounded-full absolute top-[-5px] left-12"></div>
                    </div>
                </div>
            </div>

            {/* //* right */}
            <div className="flex flex-col items-center pt-8 md:pt-0">
                <div className="relative w-[320px] md:w-96 h-[60px] md:h-20">
                    <Image
                        src={
                            "https://media.istockphoto.com/id/1358784074/photo/spiral-with-blue-and-purple-glossy-blocks-abstract-illustration-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=Oqo8hZgFFglgyW_1Hc06XutyMt1jDRtW7-9noTJw_zE="
                        }
                        alt="hero-image"
                        className="rounded-full"
                        fill
                    />
                </div>
                <div className="relative w-[180px] md:w-56 h-8 md:h-10 my-5">
                    <Image src={HeroStar} alt="stars" fill />
                </div>

                <p className="w-auto md:w-[468px] text-justify justify-start text-lg leading-relaxed tracking-wide font-space">
                    A creative agency building websites, boosting brands with digital marketing,
                    designing graphics, and crafting smart UI/UX — everything you need to stand out
                    and grow in the digital world.
                </p>
            </div>
        </div>
    );
}
