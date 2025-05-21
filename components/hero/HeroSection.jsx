import Image from "next/image";
import HeroStar from "@/public/HeroStars.png";

export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-[80px] px-3 md:px-0">
            {/* //* left */}
            <div className="md:mt-1">
                <div className="text-stone-300 text-5xl text-center md:text-left md:text-9xl font-black uppercase tracking-[4.50px]">
                    <div className="relative font-play">
                        C<span>reative</span>
                        <div>
                            <div className="w-1.5 h-1.5 md:w-3.5 md:h-3.5 bg-secondary rounded-full absolute top-[-5px] left-9 md:left-5"></div>
                            <div className="w-1.5 h-1.5 md:w-3.5 md:h-3.5 bg-secondary rounded-full absolute top-[-5px] left-12 md:left-12"></div>
                        </div>
                    </div>
                </div>
                <h1 className="text-stone-300 text-5xl text-center md:text-left md:text-9xl font-black uppercase tracking-[4.50px] pt-2 md:pt-6 font-play">
                    Agency
                </h1>
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

                <p className="w-auto md:w-[468px] text-justify justify-start text-white text-lg leading-relaxed tracking-wide font-space">
                    A creative agency building websites, boosting brands with digital marketing,
                    designing graphics, and crafting smart UI/UX — everything you need to stand out
                    and grow in the digital world.
                </p>
            </div>
        </div>
    );
}
