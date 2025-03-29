"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from "@/components/FuzzyText";
import CountUp from "@/components/CountUp";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "Next-Gen Security",
      description: "Quantum-resistant encryption & AI threat detection",
      icon: "🛡️",
    },
    {
      title: "Elite Red Teaming",
      description: "Advanced penetration testing by former NSA hackers",
      icon: "👨‍💻",
    },
    {
      title: "Zero Trust Systems",
      description: "Blockchain-verified access controls",
      icon: "🔐",
    },
  ];

  const featureBoxRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Swipe functionality for mobile
  useEffect(() => {
    if (!isMobile || !featureBoxRef.current) return;

    const element = featureBoxRef.current;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const difference = touchStartX - touchEndX;
      if (difference > 50) {
        // Swipe left
        setActiveFeature((prev) => (prev + 1) % features.length);
      } else if (difference < -50) {
        // Swipe right
        setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, features.length]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4">
    <div className="absolute inset-0 z-0 overflow-hidden">
    <div className={styles.gridLines}></div>
    <div className={styles.scanlines}></div>
    <div className={styles.noise}></div>
    <div className="absolute inset-0 opacity-5 md:opacity-10">
    <div className="absolute top-1/4 left-1/4 w-12 h-12 md:w-32 md:h-32 rounded-full bg-blue-400/20 blur-md md:blur-xl"></div>
    <div className="absolute top-3/4 right-1/4 w-20 h-20 md:w-48 md:h-48 rounded-full bg-purple-400/20 blur-md md:blur-xl"></div>
    </div>
    </div>

    <Navbar />

    <section className="text-center z-10 w-full max-w-6xl pt-16 md:pt-20">
    <div className="relative mb-6 md:mb-12">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-red-400 font-mono my-6 md:my-10">
    <FuzzyText
    baseIntensity={0.2}
    hoverIntensity={0.5}
    color="red"
    fontSize="clamp(40px, 8vw, 72px)"
    >
    0xpwns3c
    </FuzzyText>
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 font-mono max-w-2xl mx-auto px-2">
    Next-generation cyber defense systems
    </p>
    </div>

    <div
    ref={featureBoxRef}
    className="p-4 sm:p-6 md:p-8 rounded-lg backdrop-blur-sm w-full max-w-4xl mx-auto border border-white/20 mb-8 md:mb-12"
    >
    <div className="relative h-40 sm:h-48 md:h-64">
    {features.map((feature, index) => (
      <div
      key={index}
      className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 px-2 ${
        index === activeFeature ? "opacity-100" : "opacity-0"
      }`}
      >
      <span className="text-4xl sm:text-5xl md:text-6xl mb-3 animate-pulse">
      {feature.icon}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-green-400 mb-2">
      {feature.title}
      </h2>
      <p className="text-sm sm:text-base md:text-xl text-gray-300 font-mono max-w-md">
      {feature.description}
      </p>
      </div>
    ))}
    </div>
    <div className="flex justify-center gap-2 mt-4">
    {features.map((_, index) => (
      <button
      key={index}
      onClick={() => setActiveFeature(index)}
      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
        index === activeFeature ? "bg-red-400" : "bg-white/30"
      }`}
      />
    ))}
    </div>
    </div>

    <div className={`flex ${isMobile ? "flex-col items-center gap-3" : "flex-row justify-center gap-4"} w-full max-w-5xl mx-auto`}>
    <a
    href="/services"
    className={`${isMobile ? "w-50 h-50 p-4" : "p-4 sm:p-6"} rounded-lg border border-white/20 hover:border-red-400 transition-all backdrop-blur-md flex flex-col justify-center items-center text-center`}
    >
    <h3 className={`${isMobile ? "text-base" : "text-lg sm:text-xl"} font-mono text-red-400 ${isMobile ? "mb-1" : "mb-2"}`}>
    {">"} Our Services
    </h3>
    <p className={`${isMobile ? "text-sm" : "text-xs sm:text-sm md:text-base"} text-gray-300`}>
    Advanced security solutions
    </p>
    </a>
    <a
    href="/blog"
    className={`${isMobile ? "w-50 h-50 p-4" : "p-4 sm:p-6"} rounded-lg border border-white/20 hover:border-purple-400 transition-all backdrop-blur-md flex flex-col justify-center items-center text-center`}
    >
    <h3 className={`${isMobile ? "text-base" : "text-lg sm:text-xl"} font-mono text-purple-400 ${isMobile ? "mb-1" : "mb-2"}`}>
    {">"} Research Blog
    </h3>
    <p className={`${isMobile ? "text-sm" : "text-xs sm:text-sm md:text-base"} text-gray-300`}>
    Latest security findings
    </p>
    </a>
    <a
    href="/contact"
    className={`${isMobile ? "w-50 h-50 p-4" : "p-4 sm:p-6"} rounded-lg border border-white/20 hover:border-blue-400 transition-all backdrop-blur-md flex flex-col justify-center items-center text-center`}
    >
    <h3 className={`${isMobile ? "text-base" : "text-lg sm:text-xl"} font-mono text-blue-400 ${isMobile ? "mb-1" : "mb-2"}`}>
    {">"} Get Protected
    </h3>
    <p className={`${isMobile ? "text-sm" : "text-xs sm:text-sm md:text-base"} text-gray-300`}>
    Schedule a consultation
    </p>
    </a>
    </div>

    <div className="mt-8 p-3 rounded-lg w-full max-w-2xl mx-auto">
    <div className={`flex ${isMobile ? "flex-row justify-around" : "flex-col sm:flex-row justify-between"} text-sm gap-2`}>
    <div className="text-center">
    <div className="text-green-400 text-xl">
      <CountUp
        from={0}
        to={427}
        direction="up"
        duration={0.3}
      />+
    </div>
    <div className="text-gray-400 text-xs">Systems Secured</div>
    </div>
    <div className="text-center">
    <div className="text-blue-400 text-xl">
      <CountUp
        from={0}
        to={69}
        direction="up"
        duration={0.3}
      />
    </div>
    <div className="text-gray-400 text-xs">Breaches This Year</div>
    </div>
    <div className="text-center">
    <div className="text-purple-400 text-xl">24/7</div>
    <div className="text-gray-400 text-xs">Threat Monitoring</div>
    </div>
    </div>
    </div>
    </section>

    <footer className="mt-auto py-4 w-full text-center text-gray-500 text-xs font-mono">
    <div className="animate-pulse">
    (root@0xpwns3c)-[~/home] #{" "}
    <span className={styles.typingEffect}>system_secured</span>
    </div>
    </footer>
    </main>
  );
}
