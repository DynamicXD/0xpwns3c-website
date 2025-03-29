'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Others", path: "/others" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      onClick={toggleMobileMenu}
      ></div>
    )}

    {/* Mobile Sidebar */}
    <div
    className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-md z-50 shadow-lg transform transition-transform duration-300 ease-in-out border-r border-red-400/30 ${
      isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
    >
    <ul className="flex flex-col space-y-6 p-6 mt-16 text-red-400 font-mono">
    {navItems.map((item) => (
      <li key={item.path} className="relative group">
      <Link
      href={item.path}
      onClick={toggleMobileMenu}
      className={`px-3 py-2 transition-all duration-300 hover:text-gray-300 ${styles["hover:glow-red"]} inline-block w-full`}
      >
      {item.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-3/4"></span>
      </Link>
      </li>
    ))}
    </ul>
    </div>

    {/* Main Navbar */}
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md rounded-full shadow-lg border border-red-400/30 px-6 z-50 transition-all duration-300 hover:border-red-400/50 hover:bg-black/40">
    {isMobile ? (
      <></> // Empty fragment when mobile - we'll render the button separately
    ) : (
      <ul className="inline-flex items-center py-3 text-red-400 gap-x-10 font-mono">
      {navItems.map((item) => (
        <li key={item.path} className="relative group">
        <Link
        href={item.path}
        className={`px-3 py-1 transition-all duration-300 hover:text-gray-300 ${styles["hover:glow-red"]} inline-block`}
        >
        {item.name}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-3/4"></span>
        </Link>
        </li>
      ))}
      </ul>
    )}
    </nav>

    {/* Mobile Hamburger Button - Positioned top right */}
    {isMobile && (
      <button
      onClick={toggleMobileMenu}
      className="fixed top-6 right-6 bg-black/30 backdrop-blur-md rounded-full p-3 shadow-lg border border-red-400/30 z-50 transition-all duration-300 hover:border-red-400/50 hover:bg-black/40 focus:outline-none"
      aria-label="Toggle menu"
      >
      <div className="space-y-1.5">
      <span className={`block w-6 h-0.5 bg-red-400 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-red-400 transition-all ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`block w-6 h-0.5 bg-red-400 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>
      </button>
    )}
    </>
  );
}
