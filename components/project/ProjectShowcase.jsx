"use client";

import { getAllProjects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ProjectHighlighter } from "./ProjectHighlighter";

export default function ProjectShowcase() {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getAllProjects();
            setAllProjects(projects);
            setFilteredProjects(projects);
        };
        fetchProjects();
    }, []);

    const categories = [
        "all",
        ...Array.from(new Set(allProjects.map((project) => project.category).filter(Boolean))),
    ];

    const filterProjects = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setFilteredProjects(allProjects);
        } else {
            setFilteredProjects(allProjects.filter((project) => project.category === category));
        }
    };

    const projectsWithSeeMore = [...filteredProjects];
    if (filteredProjects.length > 0) {
        projectsWithSeeMore.splice(filteredProjects.length, 0, {
            title: "See Our More Projects",
            slug: "see-more",
            category: "more",
            image: "/images/see-more.jpg",
            client: "",
            description:
                "Explore more of our work and discover how we help brands grow through strategy, design, and innovation.",
            technologies: [],
            challenge: "",
            solution: "",
            results: [],
            externalLink: "/projects",
        });
    }

    return (
        <div className="mt-10 md:mt-[60px] mx-auto">
            <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => filterProjects(category)}
                        className={`px-4 py-2 rounded-full border ${
                            activeCategory === category
                                ? "bg-black text-white border-secondary"
                                : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
                        } transition-all duration-300`}
                    >
                        {category === "all" ? "All" : category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsWithSeeMore.map((project) => (
                    <div
                        key={project.slug}
                        className={`rounded-xl overflow-hidden ${
                            project.slug === "see-more"
                                ? "bg-black text-white flex flex-col justify-center p-8"
                                : ""
                        }`}
                    >
                        {project.slug === "see-more" ? (
                            <Link href={project.externalLink} className="h-full w-full">
                                <div className="h-full flex flex-col justify-center">
                                    <h3 className="text-3xl md:text-4xl font-medium mb-4">
                                        See Our
                                        <br />
                                        More Projects
                                    </h3>
                                    <p className="text-gray-400 mb-8">{project.description}</p>
                                    <div className="flex justify-end">
                                        <ArrowRight size={32} className="text-white" />
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <Link
                                href={project.externalLink || `/projects/${project.slug}`}
                                target={project.externalLink ? "_blank" : "_self"}
                                className="block h-full w-full"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title || "Project image"}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            <ProjectHighlighter />
        </div>
    );
}
