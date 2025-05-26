export default function CTA() {
    return (
        <section
            style={{
                backgroundImage: 'url("https://img.freepik.com/premium-vector/abstract-blue-gradient-textured-background_884160-6387.jpg?uid=R145339866&ga=GA1.1.1561507910.1747828804&w=740")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="py-10 md:py-[60px] mt-24 md:mt-10 bg-bottom md:bg-center overflow-x-hidden"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-3 md:space-y-8 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row px-4 md:px-0">
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="text-[27px] md:text-5xl font-bold leading-none font-play text-tertiary">
                        Start Your Journey
                    </h1>
                    <p className="hidden md:block text-base text-justify text-tertiary/90 md:w-[600px] mt-2">
                        Partner with us to turn your vision into reality. Get expert support,
                        creative insight, and results-driven strategies tailored to your goals.
                    </p>
                </div>

                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-row">
                        <input
                            type="text"
                            placeholder="example@email.com"
                            className="w-3/5 p-2 md:p-3 rounded-l-lg md:w-2/3 focus:outline-none border-2 md:border-[3px] border-secondary"
                        />
                        <button
                            type="button"
                            className="w-2/5 p-2 md:p-3 font-semibold rounded-r-lg md:w-1/3 bg-secondary text-primary border-2 md:border-[3px] border-secondary cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
