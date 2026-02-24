import { motion , AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaRocket, FaCode, FaUsers, FaTasks, FaChevronLeft, FaChevronRight, FaComments, FaStore, FaCalendarAlt, FaMobile } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { GoDatabase } from "react-icons/go";

const projects = [
    {
        title: "Hệ Thống Nhận Diện Khuôn Mặt (FaceNet + MTCNN)",
        description: "An advanced face recognition system leveraging Deep Learning models. Uses MTCNN for face detection and alignment, FaceNet for feature extraction, and SVM for classification.",
        icon: FaComments,
        technologies: "Python, FaceNet, SVM, OpenCV, MTCNN",
        teamSize: 5,
        role: "Backend Developer",
        timeline: "09/2025 - 11/2025",
        tasks: [
            "Implemented MTCNN for accurate face detection and alignment",
            "Generated 128-dimensional face embeddings using FaceNet",
            "Trained SVM classifier to identify individuals with high accuracy",
            "Optimized OpenCV video processing pipeline for real-time performance"
        ],
        techStack: ["Python", "FaceNet", "SVM", "OpenCV", "MTCNN"],
        link: "https://github.com/minhhoang0305/ProjectXLA"
    },
    {
        title: "VitDaily",
        description: "A daily management tool for teams and individuals, featuring Note, Task, and Workspace management to streamline workflow and collaboration.",
        icon: FaRocket,
        technologies: "Python, Django, Angular, MySQL, MongoDB",
        teamSize: 5,
        role: "Backend Developer",
        timeline: "09/2025 - 11/2025",
        tasks: [
            "Designed and implemented the database architecture using MySQL and MongoDB",
            "Developed note management features, including listing, creating, editing, deleting, and filtering notes",
            "Built task management functionalities, including creating, updating, deleting, and filtering tasks",
            "Implemented user authentication features, including user registration and login",
            "Developed workspace management features, including creating, updating, and deleting workspaces",
            "Implemented team management within workspaces, including creating, updating, deleting, and listing teams",
            "Built task and subtask management systems, supporting full CRUD operations and task listing"
        ],
        techStack: ["Django", "Angular", "MySQL", "MongoDB"],
        link: "https://github.com/trunghau05/ProjectVitDaily.git"
    },
    {
        title: "V3-Elearning",
        description: "A next-generation e-learning platform supporting course management, student enrollment, and progress tracking. Built for performance and scalability.",
        icon: FaStore,
        technologies: "Django, ReactJs, PostgreSQL, Redis, Docker",
        teamSize: 3,
        role: "Fullstack Developer",
        timeline: "12/2025 - Present",
        tasks: [
            "Implemented secure Authentication & Authorization system (Register/Login)",
            "Integrated GitHub OAuth for seamless social authentication",
            "Enhanced security layers for user data and session management"
        ],
        techStack: ["Django", "ReactJs", "PostgreSQL", "Redis", "Docker"],
        link: "https://github.com/Sonhoccode/V3_Elerning.git"
    },
    {
        title: "APPMOBILE",
        description: "A comprehensive mobile application integrated with Express.js backend API for data management and processing. Features native Android development with robust backend support for file uploads, payment integration, and user management.",
        icon: FaMobile,
        technologies: "NodeJS, Android, MySQL, Multer, VNPay",
        teamSize: 5,
        role: "Backend Developer",
        timeline: "05/2025 - 08/2025",
        tasks: [
            "Implemented RESTful API backend using Express.js with comprehensive endpoint coverage",
            "Designed and implemented MySQL database architecture for optimal data management",
            "Developed file upload functionality using Multer middleware with secure storage",
            "Created Android native application with intuitive UI/UX design",
            "Integrated VNPay payment gateway for secure transaction processing",
            "Implemented session management and authentication system using Express-session",
            "Optimized API performance with CORS, middleware configuration, and request validation",
            "Built responsive dashboard for comprehensive user and data management"
        ],
        techStack: ["Express.js", "Android", "MySQL", "Node.js", "Multer", "VNPay"],
        link: "https://github.com/minhhoang0305/Android-App.git"
    }
];

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        };
    },
};

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="relative z-10 px-6 py-20">
            <div className="container max-w-6xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative inline-block pb-2 text-4xl font-bold text-white md:text-5xl"
                    >
                        Featured Projects
                        <span className="absolute bottom-0 left-0 w-1/3 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    </motion.h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Nav Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 z-20 p-3 -ml-6 transition-all -translate-y-1/2 border rounded-full top-1/2 bg-white/5 hover:bg-white/10 border-white/5 md:-ml-20 hover:scale-110"
                    >
                        <FaChevronLeft className="text-xl text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 z-20 p-3 -mr-6 transition-all -translate-y-1/2 border rounded-full top-1/2 bg-white/5 hover:bg-white/10 border-white/5 md:-mr-20 hover:scale-110"
                    >
                        <FaChevronRight className="text-xl text-white" />
                    </button>

                    {/* Project Card */}
                    <div className="overflow-hidden min-h-[850px] relative">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.2 }
                                }}
                                className="p-8 rounded-3xl bg-[#0F172A]/50 border border-blue-500/20 backdrop-blur-sm w-full absolute top-0 left-0"
                            >
                                {/* Header Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 text-blue-400 bg-blue-500/10 rounded-xl">
                                        {projects[currentIndex].icon({ size: 24 })}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{projects[currentIndex].title}</h3>
                                </div>

                                {/* Description */}
                                <p className="pb-6 mb-8 leading-relaxed text-gray-300 border-b border-white/10">
                                    {projects[currentIndex].description}
                                </p>

                                {/* Data Grid */}
                                <div className="grid grid-cols-1 gap-6 p-6 mb-8 border md:grid-cols-2 bg-black/20 rounded-2xl border-white/5">
                                    {/* Tech List String */}
                                    <div className="flex items-start gap-3 md:col-span-2">
                                        <FaCode className="mt-1 text-blue-400 shrink-0" />
                                        <div>
                                            <span className="block mb-1 text-sm text-gray-400">Technologies</span>
                                            <p className="text-white">{projects[currentIndex].technologies}</p>
                                        </div>
                                    </div>

                                    {/* Team Size */}
                                    <div className="flex items-start gap-3">
                                        <FaUsers className="mt-1 text-blue-400 shrink-0" />
                                        <div>
                                            <span className="block mb-1 text-sm text-gray-400">Team Size</span>
                                            <p className="text-white">{projects[currentIndex].teamSize}</p>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="flex items-start gap-3">
                                        <FaCalendarAlt className="mt-1 text-blue-400 shrink-0" />
                                        <div>
                                            <span className="block mb-1 text-sm text-gray-400">Timeline</span>
                                            <p className="text-white">{projects[currentIndex].timeline}</p>
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="flex items-start gap-3 md:col-span-2">
                                        <FaTasks className="mt-1 text-blue-400 shrink-0" />
                                        <div>
                                            <span className="block mb-1 text-sm text-gray-400">My Role</span>
                                            <p className="font-medium text-white">{projects[currentIndex].role}</p>
                                        </div>
                                    </div>

                                    {/* Tasks */}
                                    <div className="flex items-start gap-3 md:col-span-2">
                                        <MdCheckCircle className="mt-1 text-blue-400 shrink-0" />
                                        <div className="w-full">
                                            <span className="block mb-1 text-sm text-gray-400">Tasks</span>
                                            <ul className="space-y-2">
                                                {projects[currentIndex].tasks.map((task, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-gray-300">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack Chips */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {projects[currentIndex].techStack.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs font-medium text-blue-300 border rounded-md bg-blue-900/30 border-blue-500/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <div>
                                    <a
                                        href={projects[currentIndex].link}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors group"
                                    >
                                        Source code
                                        <span className="transition-transform group-hover:translate-x-1">→</span>
                                    </a>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
