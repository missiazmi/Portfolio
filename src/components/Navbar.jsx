import React, { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ scrollContainerRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10; // Prevents jittery scroll toggle

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Scroll hide/show logic
  useEffect(() => {
    const container = scrollContainerRef?.current || window;

    const handleScroll = () => {
      const scrollTop = container === window ? window.scrollY : container.scrollTop;

      if (Math.abs(scrollTop - lastScrollY.current) < scrollThreshold) return;

      if (scrollTop < 50) {
        setShowNav(true);
      } else if (scrollTop > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = scrollTop;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    // Navbar container
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Navbar content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-text">
              <img className="my-2 mt-3 w-12 md:w-20" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-text hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-text focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label="Open menu"
            >
              <HiMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        {/* Mobile Menu Drawer */}
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-card shadow-xl p-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button inside drawer */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-text focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label="Close menu"
            >
              <HiX size={28} />
            </button>
          </div>

          {/* Mobile links */}
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block px-4 py-3 text-text font-medium hover:text-accent rounded-md transition-colors duration-200 mb-2 focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
