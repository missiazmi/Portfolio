import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Reusable fade-in wrapper
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const About = () => {
  const cards = [
    {
      icon: <FaGraduationCap size={36} className="text-accent" />,
      name: "CSE Degree",
      title: "Computer Science & Engineering",
      description:
        "Completed my Bachelor's degree in Computer Science & Engineering, gaining strong fundamentals in software development, algorithms, and system design.",
      number: "4 Years",
      numberSub: "Degree",
    },
    {
      icon: <FaLaptopCode size={36} className="text-accent" />,
      name: "Fullstack",
      title: "Frontend & Backend Development",
      description:
        "Skilled in building modern full-stack web applications using React, Node.js, Express, and databases like MySQL & MongoDB.",
      number: "25+",
      numberSub: "Projects",
    },
    {
      icon: <FaBriefcase size={36} className="text-accent" />,
      name: "Internship",
      title: "Marvell Digital",
      description:
        "Completed a 4-month internship at Marvell Digital, contributing to real-world projects and gaining hands-on experience in software development.",
      number: "4 Months",
      numberSub: "Internship",
    },
    {
      icon: <FaCode size={36} className="text-accent" />,
      name: "Programming Skills",
      title: "C++ & Java",
      description:
        "Proficient in C++ and Java with strong knowledge of data structures, algorithms, and object-oriented programming concepts. Experienced in building efficient and maintainable code.",
      number: "3+",
      numberSub: "Experience",
    },
  ];

  return (
    <section
      id="about"
      className="w-full relative min-h-screen bg-bg1 px-4 md:px-16 py-20 snap-start"
    >
      {/* Headings */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            About Me
          </h2>
          <p className="text-text/70 text-lg md:text-xl text-justify">
            I am a passionate software developer with extensive experience in
            building modern, responsive web applications. I specialize in
            creating seamless user experiences, writing clean and maintainable
            code, and leveraging the latest technologies to develop scalable,
            high-performance solutions that solve real-world problems.
          </p>
        </div>
      </FadeIn>

      {/* Why Choose Me */}
      <FadeIn>
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-text">
            Why Choose Me?
          </h3>
        </div>
      </FadeIn>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <motion.div
              className="flex flex-col items-center text-center w-full max-w-xs mx-auto"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="bg-card rounded-xl p-8 min-h-[380px] flex flex-col items-center justify-center shadow-md hover:shadow-xl transition w-full">
                {card.icon}
                <span className="text-text font-medium mb-2 mt-4">
                  {card.name}
                </span>
                <h4 className="text-accent font-semibold text-lg mb-2">
                  {card.title}
                </h4>
                <p className="text-text/70 text-sm">{card.description}</p>
              </div>

              {/* Number and subheading */}
              <div className="mt-4 text-center">
                <span className="text-accent text-2xl font-bold">
                  {card.number}
                </span>
                <p className="text-text/70">{card.numberSub}</p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default About;
