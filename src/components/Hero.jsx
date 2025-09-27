import React from "react";
import me from "../assets/me.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import resume from "../assets/Mohd Mudassir Azmi.pdf";
import { motion } from "framer-motion";
import Bubbles from "./Bubble";


const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <section
      id="hero"
      className="snap-start w- min-h-screen relative bg-bg3 flex flex-col md:flex-row"
    >
      

      {/* background */}
       <Bubbles/>
      
      {/* Social Links */}
      <div className="absolute top-[45%] left-4 flex flex-col space-y-4 z-20">
        <motion.a
          href="https://www.linkedin.com/in/mohd-mudassir-azmi-650767310/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <FaLinkedin size={28} />
        </motion.a>
        <motion.a
          href="https://github.com/missiazmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <FaGithub size={28} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/missi_azmi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <FaInstagram size={28} />
        </motion.a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:px-20 w-full h-screen justify-between">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:w-1/2 h-full">
          <motion.span
            className="text-text font-bold text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
          >
            Hello There!
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-accent mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            I'm Mohd Mudassir Azmi
          </motion.h1>

          <motion.p
            className="text-text/70 text-lg md:text-xl max-w-md mt-4 text-justify"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Software Engineer | Full Stack Developer | Solving Complex Problems with Innovative Technology
          </motion.p>

          <motion.div
            className="flex space-x-4 mt-6 z-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <a
              href={resume}
              download="Mohd Mudassir Azmi_Resume.pdf"
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/80 transition"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-white transition"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Right: Picture + Blobs */}
        <motion.div
          className="relative w-full md:w-1/2 h-screen flex justify-center items-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         

          <img
            src={me}
            alt="Mohd Mudassir Azmi"
            className="relative z-10 w-3/4 md:w-auto md:h-[80vh] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
