import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const ContactItem = ({ icon: Icon, text, href, colorClass = "text-white" }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
    >
        <div className={`p-2 rounded-full bg-white/5 group-hover:scale-110 transition-transform ${colorClass}`}>
            <Icon size={20} />
        </div>
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{text}</span>
    </a>
);

const StatItem = ({ count, label, suffix = "+" }) => (
    // w-full md:w-1/3 forces equal columns on desktop
    // leading-tight and min-h-[3rem] ensures 1-line labels align with 2-line labels
    <div className="flex flex-col items-center justify-center w-full md:w-1/3 px-4 py-4 md:py-0">
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            {count}
            {suffix}
        </h3>
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest text-center leading-tight min-h-[3rem] flex items-end justify-center pb-1">
            {label}
        </p>
    </div>
);

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Profile Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <div>
                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-2"
                            >
                                Minh Hoàng
                            </motion.h1>
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl text-blue-400 font-medium mb-4"
                            >
                                Backend Developer
                            </motion.h2>

                            <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400">
                                <FaMapMarkerAlt />
                                <span>HCMC, Vietnam</span>
                            </motion.div>
                        </div>

                        {/* Contact List */}
                        <motion.div variants={containerVariants} className="flex flex-col gap-4 max-w-md">
                            <motion.div variants={itemVariants}>
                                <ContactItem
                                    icon={MdEmail}
                                    text="hoang7620345@gmail.com"
                                    href="mailto:hoang7620345@gmail.com"
                                    colorClass="text-red-400"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ContactItem
                                    icon={FaLinkedin}
                                    text="Hoang Pham Minh"
                                    href="https://www.linkedin.com/in/ho%C3%A0ng-ph%E1%BA%A1m-minh-0b7009356/"
                                    colorClass="text-blue-500"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <ContactItem
                                    icon={FaGithub}
                                    text="minhhoang0305"
                                    href="https://github.com/minhhoang0305"
                                    colorClass="text-gray-100"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                            >
                                View All Projects <HiArrowRight />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN: Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 lg:p-12 shadow-2xl">
                            {/* Decorative glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />

                            <div className="flex flex-col md:flex-row relative z-10">
                                <StatItem count="3" label="Academic Projects" />
                                <StatItem count="2" label="Years Learning" />
                                <StatItem count="100" label="Dedication" suffix="%" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
