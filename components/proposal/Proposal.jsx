"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { GrayStar, GreenDiamond, SpiralAroundCircle, StartBurstShape } from "../SVG/SVGIcons";

export default function Proposal() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <>
            <div
                className={`max-w-7xl mx-auto px-5 md:px-10 mt-20 md:mt-[200px] w-full flex relative my-32 bg-tertiary rounded-3xl py-5 md:py-10 justify-between items-center overflow-hidden`}
            >
                {/* Left content */}
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

                {/* Right decorative elements */}
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
                    <div className="absolute bottom-0 left-8">
                        <GreenDiamond />
                    </div>

                    {/* Gray star */}
                    <div className="absolute right-[200px] bottom-[105px]">
                        <GrayStar />
                    </div>
                </div>
            </div>

            {/* Popup Form */}
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-primary bg-opacity-50"
                        onClick={closePopup}
                    ></div>
                    <div className="bg-white rounded-lg px-5 py-10 md:p-8 shadow-2xl w-full max-w-lg z-10 relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 text-primary hover:text-gray-700"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-primary">
                            Get Your Free Proposal
                        </h3>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Write your name or Your Company name"
                                    className="w-full text-sm md:text-base text-primary p-3 md:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                                >
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    placeholder="Write your proposal subject"
                                    className="w-full text-sm md:text-base p-3 md:p-5 border text-primary border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                                >
                                    Description
                                </label>
                                <Textarea
                                    id="description"
                                    placeholder="Please write the details you want"
                                    className="w-full text-sm md:text-base p-3 md:p-5 border text-primary border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                    rows={4}
                                />
                            </div>

                            <Button variant={"link"} type="submit" className="w-full">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
