"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Plus from "@/public/plus.png";
import Minus from "@/public/minus.png";
import Image from "next/image";
import { Section } from "lucide-react";

const workSteps = [
    {
        number: "01",
        title: "Consultation",
        content:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        number: "02",
        title: "Research and Strategy",
        content:
            "We conduct thorough research on your industry, competitors, and target audience to develop a comprehensive strategy tailored to your specific business needs and goals.",
    },
    {
        number: "03",
        title: "Implementation",
        content:
            "Our team executes the strategy with precision, implementing all planned elements while maintaining constant communication with you throughout the process.",
    },
    {
        number: "04",
        title: "Monitoring and Optimization",
        content:
            "We continuously monitor the performance of your campaigns and make data-driven optimizations to ensure maximum effectiveness and return on investment.",
    },
    {
        number: "05",
        title: "Reporting and Communication",
        content:
            "Regular detailed reports are provided to keep you informed about the progress and results of our work, with clear insights and recommendations.",
    },
    {
        number: "06",
        title: "Continual Improvement",
        content:
            "We believe in constant improvement, regularly reviewing strategies and implementing new approaches to keep your business ahead of the competition.",
    },
];

export default function WorkProgress() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="space-y-3 md:space-y-8 mt-10 md:mt-[80px]">
            {workSteps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-lg md:rounded-2xl overflow-hidden ${
                        openIndex === index ? "bg-secondary" : "bg-tertiary"
                    }`}
                >
                    <button
                        className="flex justify-between items-center w-full p-3 md:p-6 text-left"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openIndex === index}
                    >
                        <div className="flex items-center justify-center gap-3 md:gap-6">
                            <span className="text-xl md:text-4xl font-bold text-primary">
                                {step.number}
                            </span>
                            <span className="text-base md:text-2xl font-semibold text-primary">
                                {step.title}
                            </span>
                        </div>
                        <div className="rounded-full text-primary border border-primary w-7 md:w-10 h-7 md:h-10 flex items-center justify-center">
                            <Image
                                src={openIndex === index ? Minus : Plus}
                                alt="plus/minus icon"
                                width={18}
                                height={18}
                                className="w-[60%] md:w-[50%]"
                            />
                        </div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div className="border-t border-primary/70 pt-4">
                                        <p className="text-primary text-sm md:text-base font-medium text-justify">
                                            {step.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
