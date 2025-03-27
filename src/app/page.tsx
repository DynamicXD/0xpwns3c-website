'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';
import type { Metadata } from 'next';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      title: "Next-Gen Security",
      description: "Quantum-resistant encryption & AI threat detection",
      icon: "🛡️"
    },
    {
      title: "Elite Red Teaming",
      description: "Advanced penetration testing by former NSA hackers",
      icon: "👨‍💻"
    },
    {
      title: "Zero Trust Systems",
      description: "Blockchain-verified access controls",
      icon: "🔐"
    }
  ];

  // Rotate featured services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4">
      {/* Enhanced Cyberpunk Background - optimized for mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
        {/* Floating circuit pattern - reduced for mobile */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 md:w-32 md:h-32 rounded-full bg-blue-400/20 blur-md md:blur-xl"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 md:w-48 md:h-48 rounded-full bg-purple-400/20 blur-md md:blur-xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-red-400/20 blur-md md:blur-xl hidden md:block"></div>
        </div>
      </div>

      <Navbar />

      <section className="text-center z-10 w-full max-w-6xl pt-16 md:pt-20"> {/* Added padding-top */}
        {/* Main heading with responsive sizing */}
        <div className="relative mb-6 md:mb-12">
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold text-red-400 ${styles.glowRed} font-mono my-6 md:my-10`}>
            <FuzzyText
              baseIntensity={0.2}
              hoverIntensity={0.5}
              color='red'
              fontSize="clamp(40px, 8vw, 72px)"
            >
              0xpwns3c
            </FuzzyText>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-mono max-w-2xl mx-auto px-2">
            Next-generation cyber defense systems
          </p>
          <div className={`absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-full ${styles.glowRed} opacity-20 blur-xl pointer-events-none`}></div>
        </div>

        {/* Featured services carousel - responsive height */}
        <div className={`p-4 sm:p-6 md:p-8 rounded-lg ${styles.glassEffect} backdrop-blur-sm w-full max-w-4xl mx-auto border border-white/20 mb-8 md:mb-12`}>
          <div className="relative h-40 sm:h-48 md:h-64">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 px-2 ${index === activeFeature ? 'opacity-100' : 'opacity-0'}`}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-6 animate-pulse">{feature.icon}</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-green-400 mb-2 sm:mb-3 md:mb-4">{feature.title}</h2>
                <p className="text-sm sm:text-base md:text-xl text-gray-300 font-mono max-w-md">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full ${index === activeFeature ? 'bg-red-400' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section - stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mx-auto">
          <a href="/services" className={`p-4 sm:p-6 rounded-lg border border-white/20 hover:border-red-400 transition-all ${styles.glassEffect} backdrop-blur-md group`}>
            <h3 className="text-lg sm:text-xl font-mono text-red-400 mb-2 sm:mb-3">{'>'} Our Services</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Advanced security solutions</p>
            <div className="mt-3 sm:mt-4 h-0.5 bg-white/10 group-hover:bg-red-400 transition-all"></div>
          </a>

          <a href="/blog" className={`p-4 sm:p-6 rounded-lg border border-white/20 hover:border-purple-400 transition-all ${styles.glassEffect} backdrop-blur-md group`}>
            <h3 className="text-lg sm:text-xl font-mono text-purple-400 mb-2 sm:mb-3">{'>'} Research Blog</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Latest security findings</p>
            <div className="mt-3 sm:mt-4 h-0.5 bg-white/10 group-hover:bg-purple-400 transition-all"></div>
          </a>

          <a href="/contact" className={`p-4 sm:p-6 rounded-lg border border-white/20 hover:border-blue-400 transition-all ${styles.glassEffect} backdrop-blur-md group`}>
            <h3 className="text-lg sm:text-xl font-mono text-blue-400 mb-2 sm:mb-3">{'>'} Get Protected</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">Schedule a consultation</p>
            <div className="mt-3 sm:mt-4 h-0.5 bg-white/10 group-hover:bg-blue-400 transition-all"></div>
          </a>
        </div>

        {/* Real-time stats - compact on mobile */}
        <div className={`mt-8 sm:mt-12 p-3 sm:p-4 rounded-lg ${styles.glassEffect} w-full max-w-2xl mx-auto`}>
          <div className="flex flex-col sm:flex-row justify-between font-mono text-sm gap-2 sm:gap-0">
            <div className="text-center">
              <div className="text-green-400 text-xl sm:text-2xl">427+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Systems Secured</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 text-xl sm:text-2xl">0</div>
              <div className="text-gray-400 text-xs sm:text-sm">Breaches This Year</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 text-xl sm:text-2xl">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm">Threat Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - smaller text on mobile */}
      <footer className="mt-auto py-4 sm:py-6 w-full text-center text-gray-500 text-xs sm:text-sm font-mono">
        <div className="animate-pulse">(root@0xpwns3c)-[~/home] # <span className={styles.typingEffect}>system_secured</span></div>
      </footer>
    </main>
  );
}