import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 relative z-10">
            <div className="container max-w-4xl mx-auto space-y-16">

                {/* Intro */}
                <div className="text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
                    >
                        Hello! My name is Minh Hoàng, a Software Engineering student with a strong passion for building efficient and scalable backend solutions. I enjoy diving deep into system architecture and creating applications that solve real-world problems.
                    </motion.p>
                </div>

                {/* Content Boxes */}
                <div className="space-y-8">

                    {/* Box 1: Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                    >
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            My journey into software development began with a curiosity about how things work behind the scenes. I am especially drawn to backend development because it is where the real “magic” happens—handling data, managing resources, and ensuring everything runs smoothly.
                            <br /><br />
                            I continuously learn and explore new technologies to build secure and efficient server-side applications. What excites me most about technology is its ability to solve complex problems and create real-world impact. I am always eager to adopt best practices and strongly believe in writing clean, maintainable code.
                        </p>
                    </motion.div>

                    {/* Box 2: Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center md:items-start md:text-left"
                    >
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">Education</h3>

                        <div className="space-y-2">
                            <h4 className="text-xl md:text-2xl font-bold text-white">Vietnam Aviation Academy – VAA</h4>
                            <p className="text-gray-400 text-lg">Information Technology (Web Development)</p>
                            <div className="pt-2">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30">
                                    2023 - Expected 2027
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
