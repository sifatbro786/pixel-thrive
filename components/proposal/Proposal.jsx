"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GrayStar, GreenDiamond, SpiralAroundCircle, StartBurstShape } from "../SVG/SVGIcons";
import { cn } from "@/lib/utils";
import PopupForm from "./PopupForm";

export default function Proposal() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <section
                className={cn(
                    "max-w-7xl mx-auto px-5 md:px-10 mt-20 md:mt-[200px] w-full flex relative bg-tertiary rounded-3xl py-5 md:py-10 justify-between items-center",
                )}
            >
                {/* //* Left content */}
                <div className="max-w-md z-10">
                    <h2 className="text-[22px] md:text-3xl font-bold mb-4 text-primary">
                        Let's make things happen
                    </h2>
                    <p className="text-primary mb-6 text-justify text-sm md:text-base">
                        Contact us today to learn more about how our digital marketing services can
                        help your business grow and succeed online.
                    </p>
                    <Button variant={"link"} onClick={openPopup}>
                        Get your free proposal
                    </Button>
                </div>

                {/* //* Right decorative elements */}
                <div className="relative h-48 w-48 hidden md:block">
                    {/* Star burst shape */}
                    <div className="absolute top-0 right-0">
                        <StartBurstShape />
                    </div>

                    {/* Black circle with eyes */}
                    <div className="absolute top-16 left-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-4 h-6 bg-secondary rounded-full mx-1"></div>
                        <div className="w-4 h-6 bg-secondary rounded-full mx-1"></div>
                    </div>

                    {/* Spiral around the circle */}
                    <div className="absolute top-8 left-0 w-28 h-28">
                        <SpiralAroundCircle />
                    </div>

                    {/* Green diamond */}
                    <div className="absolute bottom-[-3px] left-[40px]">
                        <GreenDiamond />
                    </div>

                    {/* Gray star */}
                    <div className="absolute right-[200px] bottom-[105px]">
                        <GrayStar />
                    </div>
                </div>
            </section>

            {/* //* Popup Form */}
            {isPopupOpen && <PopupForm closePopup={closePopup} />}
        </>
    );
}
