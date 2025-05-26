import Image from "next/image";
import ContactIcon from "@/public/contact2.png";
import { Button } from "../ui/button";
import { getBlurImage } from "@/utils/getBlurImage";

export default function ContactShowcase() {
    return (
        <div className="flex flex-col-reverse md:flex-row md:gap-10 items-center justify-between">
            {/* //* Form */}
            <form className="w-full md:w-[45%] text-[#e6e6e6] space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm mb-1.5">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full p-3 border rounded-lg bg-transparent outline-none border-[#b9ff66] placeholder:text-[#cccccc]"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm mb-1.5">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className="w-full p-3 border rounded-lg bg-transparent outline-none border-[#b9ff66] placeholder:text-[#cccccc]"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm mb-1.5">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full p-3 border rounded-lg bg-transparent outline-none border-[#b9ff66] placeholder:text-[#cccccc]"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full py-3 md:py-5 font-semibold uppercase bg-[#b9ff66] text-black rounded-lg hover:opacity-90 transition"
                >
                    Send Message
                </Button>
            </form>

            {/* //* Image */}
            <div className="w-full md:w-[55%]">
                <Image
                    priority
                    src={ContactIcon}
                    alt="Contact Us"
                    className="w-full object-cover rounded-lg"
                    placeholder="blur"
                    blurDataURL={getBlurImage()}
                />
            </div>
        </div>
    );
}
