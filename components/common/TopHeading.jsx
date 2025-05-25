

export default function TopHeading({heading, paragraph}) {
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <h2 className="w-fit px-1.5 bg-secondary rounded-md text-primary text-2xl md:text-4xl font-medium uppercase">{heading}</h2>
            <p className="w-auto text-justify md:w-[580px] text-base md:text-lg font-normal leading-tight">{paragraph}</p>
        </div>
    );
}