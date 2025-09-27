import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Advanced LMS",
    description:
      "A full-featured Learning Management System built with the MERN stack, including authentication, course management, responsive UI, and user dashboards. Implemented features such as course creation, enrollment, progress tracking, and reporting. Focused on scalable architecture and clean code to ensure maintainability and performance.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio website to showcase my projects, skills, and resume. Built with React and Tailwind for a responsive and interactive UI. Integrated smooth scrolling, animations, and project filtering to improve user experience and accessibility.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "E-Commerce Store",
    description:
      "An e-commerce platform featuring a product catalog, shopping cart, authentication, and Stripe payment integration. Built using React, Node.js, and MongoDB. Focused on user-friendly design, performance optimization, and secure transactions. Implemented search, filter, and order management functionalities.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
  },
  {
    title: "LLM Doc Chat App",
    description:
      "A document-based chat application using LLM with Pinecone for vector database embeddings. Enables semantic search and interactive Q&A on uploaded documents, supporting real-time conversations and context-aware responses.",
    tech: ["React", "Node.js", "Pinecone", "OpenAI API"],
  },
  {
    title: "Excel to JSON Converter",
    description:
      "A utility web application that converts Excel spreadsheets to JSON format. Handles multiple sheets, data validation, and provides downloadable JSON output for easy integration into web projects.",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Notice & News App",
    description:
      "A mobile/web app to manage and display notices and news. Features include categorization, notifications, search, and admin panel to post and manage content efficiently.",
    tech: ["React", "Node.js", "Firebase"],
  },
  {
    title: "Java Projects",
    description:
      "Includes several Java-based projects such as Todo App for task management, Library Management System for tracking books and members, and other small-scale applications demonstrating object-oriented programming, file handling, and GUI development.",
    tech: ["Java", "Swing", "MySQL"],
  },
  {
    title: "ML Fraud Detection System",
    description:
      "A machine learning system to detect fraudulent transactions. Utilizes supervised learning algorithms, data preprocessing, feature engineering, and model evaluation to achieve high accuracy in detecting anomalies in financial datasets.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  // Touch & Mouse Events for swipe
  const handleStart = (x) => setStartX(x);
  const handleEnd = (x) => {
    if (startX - x > 50) nextSlide();
    if (x - startX > 50) prevSlide();
  };

  // Framer Motion fadeUp variant
  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-bg3 px-4 md:px-16 py-20 snap-start flex flex-col items-center"
    >
      {/* Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Projects
        </h2>
        <p className="text-text/70 text-lg md:text-xl">
          Some of my best work showcasing my skills and experience.
        </p>
      </motion.div>

      {/* Carousel */}
      <div
        className="relative w-full max-w-4xl overflow-hidden cursor-grab"
        onTouchStart={(e) => handleStart(e.changedTouches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out select-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="w-full flex-shrink-0 bg-card rounded-xl shadow-md p-8 flex flex-col justify-between h-[550px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={fadeUp}
            >
              {/* Project Info */}
              <div className="overflow-auto">
                <h3 className="text-2xl font-semibold text-text mb-3">
                  {project.title}
                </h3>
                <p className="text-text/70 text-sm">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-bg3 text-text rounded-md text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-accent text-white px-3 py-2 rounded-full shadow-md hover:bg-accent/80"
        >
          <HiArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-accent text-white px-3 py-2 rounded-full shadow-md hover:bg-accent/80"
        >
          <HiArrowRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-6 gap-3 z-10 relative">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full border-2 border-accent ${
              current === i ? "bg-accent" : "bg-bg3"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
