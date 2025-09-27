import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="snap-start bg-bg3 text-text py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Branding */}
          <div>
            <a href="#hero" className="inline-block">
              <img className="my-3 w-12 md:w-20" src={logo} alt="Logo" />
            </a>
            <p className="text-text/70 mt-2">
              Passionate Software Developer | Fullstack Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="https://www.linkedin.com/in/mohd-mudassir-azmi-650767310/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-transform transform hover:scale-110 duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/missiazmi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-transform transform hover:scale-110 duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.instagram.com/missi_azmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-transform transform hover:scale-110 duration-300"
              >
                <FaInstagram size={22} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=mudassirazmi30@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" > <FaEnvelope size={22} /> </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-text/20 mt-8 pt-6 text-center text-sm text-text/60">
          © {new Date().getFullYear()} Mohd Mudassir Azmi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
