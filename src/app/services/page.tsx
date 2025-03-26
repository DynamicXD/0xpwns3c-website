// @ts-nocheck

import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';

export default function ServicesPage() {
  const services = [
    {
      title: "Penetration Testing",
      description: "Full security audit with detailed vulnerability reports and remediation guidance. We hack your systems before the bad guys do.",
      features: [
        "OWASP Top 10 coverage",
        "Detailed exploit reports",
        "24/7 monitoring available",
        "Post-fix verification"
      ],
      price: "$1,500+",
      color: "red",
      icon: "🛡️"
    },
    {
      title: "Full Stack Development",
      description: "Complete websites with modern tech stacks, SEO optimization, and domain hosting included.",
      features: [
        "React/Next.js frontend",
        "Node.js or Python backend",
        "SEO optimized content",
        "Free 1yr hosting"
      ],
      price: "$3,000+",
      color: "blue",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance and modern UI/UX.",
      features: [
        "React Native or Flutter",
        "App Store deployment",
        "Push notifications",
        "Backend API integration"
      ],
      price: "$5,000+",
      color: "purple",
      icon: "📱"
    },
    {
      title: "Bug Bounty Program",
      description: "Continuous security monitoring with rewards for discovered vulnerabilities.",
      features: [
        "White-hat hacker network",
        "Priority vulnerability handling",
        "Monthly security reports",
        "Zero-day protection"
      ],
      price: "$800/mo",
      color: "green",
      icon: "💰"
    }
  ];

  // Hover effect classes mapped to colors
  const hoverClasses = {
    red: {
      border: 'hover:border-red-400',
      buttonBorder: 'hover:border-red-400',
      buttonBg: 'hover:bg-red-400/10',
      buttonText: 'hover:text-red-400'
    },
    blue: {
      border: 'hover:border-blue-400',
      buttonBorder: 'hover:border-blue-400',
      buttonBg: 'hover:bg-blue-400/10',
      buttonText: 'hover:text-blue-400'
    },
    purple: {
      border: 'hover:border-purple-400',
      buttonBorder: 'hover:border-purple-400',
      buttonBg: 'hover:bg-purple-400/10',
      buttonText: 'hover:text-purple-400'
    },
    green: {
      border: 'hover:border-green-400',
      buttonBorder: 'hover:border-green-400',
      buttonBg: 'hover:bg-green-400/10',
      buttonText: 'hover:text-green-400'
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />
      
      <section className="text-center mt-24 z-10 w-full max-w-6xl px-6 pb-6">
        <h1 className={`text-5xl font-bold text-red-400 ${styles.glowRed} font-mono mb-8`}>
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.3} color='red' fontSize={48}>
            Our Services
          </FuzzyText>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const hover = hoverClasses[service.color];
            return (
              <div 
                key={index}
                className={`
                  relative p-6 rounded-lg 
                  border border-gray-800/30 
                  ${hover.border}
                  transition-all duration-300 
                  group overflow-hidden h-full flex flex-col
                  bg-black/40 backdrop-blur-md
                  hover:bg-black/50 hover:backdrop-blur-lg
                  shadow-xl hover:shadow-2xl
                `}
              >
                {/* Background Overlay */}
                <div 
                  className={`
                    absolute inset-0 z-0 opacity-20 
                    bg-gradient-to-br from-transparent 
                    to-${service.color}-900/20
                  `}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Service icon */}
                  <div className={`text-4xl mb-4 text-${service.color}-400`}>{service.icon}</div>
                  
                  {/* Service title */}
                  <h3 className={`text-2xl font-bold font-mono mb-3 text-${service.color}-400`}>
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 font-mono flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features list - fixed height for alignment */}
                  <ul className="mb-6 space-y-2 min-h-[120px]">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start font-mono text-xs text-gray-400">
                        <span className={`text-${service.color}-400 mr-2`}>▹</span>
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price and CTA - fixed at bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-800/30">
                    <p className={`text-lg font-bold text-${service.color}-400 font-mono mb-3`}>
                      {service.price}
                    </p>
                    <button 
                      className={`
                        w-full py-2 text-xs font-mono 
                        border border-gray-800/30 
                        bg-gray-900/20 
                        ${hover.buttonBorder}
                        ${hover.buttonBg}
                        ${hover.buttonText}
                        transition-all duration-300
                        backdrop-blur-sm
                      `}
                    >
                      REQUEST_QUOTE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA - Simplified */}
<div className={`mt-6 p-8 rounded-lg max-w-4xl mx-auto`}>
  <h2 className={`text-3xl font-bold text-red-400 mb-3 font-mono ${styles.glowRed}`}>
    ENTERPRISE SOLUTIONS
  </h2>
  <p className="text-gray-300 font-mono mb-4">
    Need something custom? We architect bespoke solutions for large-scale operations with SLA guarantees.
  </p>
  <button className={`px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold font-mono ${styles.glowRed}`}>
    CONTACT_SPECIALISTS
  </button>
</div>
      </section>

      {/* Terminal-like footer */}
      <footer className="py-6 w-full text-center text-gray-500 text-sm font-mono">
        <p>(root@0xpwns3c)-[~/services] # <span className={styles.typingEffect}>services_initialized</span></p>
      </footer>
    </main>
  );
}