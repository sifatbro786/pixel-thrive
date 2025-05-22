export default function Stats() {
    const stats = [
        {
            number: 10,
            text: "Success Project",
            horizontal: true,
        },
        {
            number: 3,
            text: "Years Experience",
            horizontal: true,
        },
        {
            number: 5,
            text: "Product Launched",
            horizontal: true,
        },
        {
            number: 2,
            text: "Startup Raised",
            horizontal: false,
        },
    ];

    return (
        <div className="w-full mt-10 md:mt-[60px] flex flex-col md:flex-row items-center justify-between">
            {stats.map((stat) => (
                <div key={crypto.randomUUID()} className="flex space-y-10 md:space-y-0">
                    <div>
                        <p className="flex text-4xl md:text-6xl font-normal uppercase tracking-widest justify-center">
                            {stat?.number}
                            <span className="text-secondary">+</span>
                        </p>
                        <p className="pt-1 md:pt-5">{stat?.text}</p>
                    </div>
                    {stat?.horizontal && <div className="hidden md:block w-[2px] bg-tertiary mx-[120px]"></div>}
                </div>
            ))}
        </div>
    );
}
