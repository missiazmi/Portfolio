import React, { useState } from 'react';
import { FaLaptopCode, FaNodeJs, FaLightbulb, FaDatabase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaGamepad, FaHeadphones, FaMusic, FaMotorcycle, FaPlane } from "react-icons/fa";
import { motion } from 'framer-motion';

function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(null);

    const educationData = [
        {
            icon: <FaGraduationCap size={36} />,
            degree: "B.Tech (Computer Science & Engineering)",
            institution: "Integral University, Lucknow",
            duration: "2021 - 2025",
            result: "CGPA - 9.60",
        },
        {
            icon: <FaGraduationCap size={36} />,
            degree: "Intermediate (Senior Secondary)",
            institution: "M.P. Public School (CBSE)",
            duration: "2018 - 2019",
            result: "Percentage-77%",
        },
        {
            icon: <FaGraduationCap size={36} />,
            degree: "High School (Secondary)",
            institution: "M.P. Public School (CBSE)",
            duration: "2016 - 2017",
            result: "Percentage-74%",
        },
    ];

    const handleCardClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const skillsData = [
        {
            icon: <FaLaptopCode size={36} />,
            heading: "Languages",
            description: "Java, C/C++, Javascript",
        },
        {
            icon: <FaNodeJs size={36} />,
            heading: "Technologies",
            description: "HTML, CSS, Node.js, React.js, Express.js",
        },
        {
            icon: <FaDatabase size={36} />,
            heading: "Database",
            description: "MySQL, MongoDB",
        },
        {
            icon: <FaLightbulb size={36} />,
            heading: "Core Skills",
            description: "Data Structures, Algorithms, Problem Solving, Communication, Teamwork, Time Management",
        },
    ];

    const workExperience = [
        {
            period: "July 2025 - Sep 2025",
            company: "Marvell Digital",
            role: "Software Intern",
            description: "Worked on full-stack development using React and Node.js and other AI related projects",
        },
        {
            period: "July 2024 - Aug 2024",
            company: "IBM",
            role: "Software Intern",
            description: "Assisted in Building ML projects and gained knowledge about ML and AI",
        }
    ];

    const hobbies = [
        { icon: <FaGamepad />, name: "Gaming" },
        { icon: <FaHeadphones />, name: "Songs" },
        { icon: <FaMotorcycle />, name: "Riding" },
        { icon: <FaPlane />, name: "Travelling" },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id='portfolio' className="min-h-screen snap-start py-16 bg-bg3">

            {/* Skills */}
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold mb-2 text-center text-accent"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={fadeUp}
                >
                    Portfolio
                </motion.h2>
                <motion.h3
                    className="text-3xl mt-6 font-bold mb-6 text-center text-text"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    variants={fadeUp}
                >
                    Skills
                </motion.h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {skillsData.map((skill, index) => {
    const isActive = activeIndex === index;
    return (
      <motion.div
        key={index}
        onClick={() => handleCardClick(index)}
        className="group relative bg-card rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center min-h-[220px] cursor-pointer"
        initial={{ opacity: 0, y: 20 }}          // Fade-up effect
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Smooth hover
      >
        <div className={`mb-4 transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text group-hover:text-accent'}`}>
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-text">{skill.heading}</h3>
        <p className={`text-text mt-2 text-center transition-all duration-300 ${isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40'}`}>
          {skill.description}
        </p>
      </motion.div>
    );
  })}
</div>



            </div>

            <div className='flex flex-col lg:flex-row justify-around overflow-hidden'>

                {/* Education */}
                <div className="mt-16 relative">
                    <div className="text-center mb-12">
                        <motion.h2 className="text-4xl font-bold text-text" initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }} variants={fadeUp}>
                            Education
                        </motion.h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-3 md:left-1/3 transform -translate-x-1/2 h-full border-l-2 border-accent"></div>

                        <div className="space-y-12">
                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col md:flex-row items-start md:items-center relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    variants={index % 2 === 0 ? fadeLeft : fadeRight}
                                >
                                    <div className="md:w-1/3 text-left px-7 md:text-right md:px-4 md:pr-8">
                                        <span className="text-text/70 font-medium">{edu.duration}</span>
                                    </div>
                                    <div className="absolute left-3 md:left-1/3 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full z-10"></div>
                                    <div className="md:w-2/3 px-4 md:pl-8 mt-4 md:mt-0">
                                        <div className="p-4">
                                            <div className="mb-2 text-text">{edu.icon}</div>
                                            <h4 className="text-accent font-semibold text-lg">{edu.degree}</h4>
                                            <span className="text-text font-medium">{edu.institution}</span>
                                            {edu.result && <span className="text-text/70 block mt-1">{edu.result}</span>}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Work Experience */}
                <div className="mt-16 relative">
                    <div className="text-center mb-12">
                        <motion.h2 className="text-4xl font-bold text-text" initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }} variants={fadeUp}>
                            Work Experience
                        </motion.h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="absolute left-3 md:left-1/3 transform -translate-x-1/2 h-full border-l-2 border-accent "></div>
                        <div className="space-y-12">
                            {workExperience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col md:flex-row items-start md:items-center relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    variants={index % 2 === 0 ? fadeLeft : fadeRight}
                                >
                                    <div className="md:w-1/3 text-left px-7 md:text-right md:px-4 md:pr-8">
                                        <span className="text-text/70 font-medium">{job.period}</span>
                                    </div>
                                    <div className="absolute left-3 md:left-1/3 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full z-10  "></div>
                                    <div className="md:w-2/3 px-4 md:pl-8 mt-4 md:mt-0">
                                        <div className=" p-6 ">
                                            <h4 className="text-accent font-semibold text-lg">{job.company}</h4>
                                            <h5 className="text-text font-medium mb-2">{job.role}</h5>
                                            <p className="text-text/70">{job.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Hobbies */}
            <div className="mt-16">
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl font-bold text-text" initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }} variants={fadeUp}>
                        Hobbies
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16">
                    {hobbies.map((hobby, index) => (
                        <motion.div key={index} className="flex flex-col items-center text-center" initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }} variants={fadeUp} transition={{ delay: index * 0.1 }}>
                            <div className="text-text hover:text-accent text-4xl mb-2">{hobby.icon}</div>
                            <span className="text-text font-medium">{hobby.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Portfolio;
