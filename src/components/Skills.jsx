import { motion } from "framer-motion";
import { FaPython, FaPhp, FaReact, FaGithub, FaCode, FaServer, FaDatabase, FaTools, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiDjango, SiMongodb, SiMysql, SiPostman, SiPostgresql, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const skillsData = [
    {
        category: "Programming Languages",
        icon: FaCode,
        skills: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "PHP", icon: FaPhp, color: "#777BB4" },
        ],
    },
    {
        category: "Frontend Frameworks",
        icon: FaCode,
        skills: [
            { name: "ReactJs", icon: FaReact, color: "#61DAFB" },
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS", icon: FaCss3, color: "#1572B6" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        ],
    },
    {
        category: "Backend Frameworks",
        icon: FaServer,
        skills: [
            { name: "NodeJs", icon: SiNodedotjs, color: "#339933" },
            { name: "Django", icon: SiDjango, color: "#092E20" },
        ],
    },
    {
        category: "Databases & Storage",
        icon: FaDatabase,
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#3B82F6" },
        ],
    },
    {
        category: "Development Tools",
        icon: FaTools,
        skills: [
            { name: "Github", icon: FaGithub, color: "#FFFFFF" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 relative z-10">
            <div className="container max-w-6xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white relative inline-block pb-2"
                    >
                        Skills & Technologies
                        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </motion.h2>
                </div>

                {/* Categories Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-6 rounded-2xl bg-[#0a0a1a] border border-blue-500/20 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <category.icon className="text-blue-400 text-xl" />
                                <h3 className="text-xl font-bold text-blue-100">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                    >
                                        <div
                                            className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        >
                                            <skill.icon />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
