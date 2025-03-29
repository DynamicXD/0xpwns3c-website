import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from "@/components/FuzzyText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | 0xpwns3c",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Penetration Testing",
      description:
        "Full security audit with detailed vulnerability reports and remediation guidance. We hack your systems before the bad guys do.",
      features: [
        "OWASP Top 10 coverage",
        "Detailed exploit reports",
        "24/7 monitoring available",
        "Post-fix verification",
      ],
      price: "Rs. 5000",
      color: "red",
      icon: "🛡️",
    },
    {
      title: "Full Stack Development",
      description:
        "Complete websites with modern tech stacks, SEO optimization, and domain hosting included.",
      features: [
        "React/Next.js frontend",
        "Node.js or Python backend",
        "SEO optimized content",
        "Free 1yr hosting",
      ],
      price: "Rs. 4000",
      color: "blue",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications with native performance and modern UI/UX.",
      features: [
        "React Native or Flutter",
        "App Store deployment",
        "Push notifications",
        "Backend API integration",
      ],
      price: "Rs. 3000",
      color: "purple",
      icon: "📱",
    },
    {
      title: "Bug Bounty Program",
      description:
        "Continuous security monitoring with rewards for discovered vulnerabilities.",
      features: [
        "White-hat hacker network",
        "Priority vulnerability handling",
        "Monthly security reports",
        "Zero-day protection",
      ],
      price: "Rs. 2000/mo",
      color: "green",
      icon: "💰",
    },
  ];

  // Hover effect classes mapped to colors
  const hoverClasses = {
    red: {
      border: "hover:border-red-400",
      buttonBorder: "hover:border-red-400",
      buttonBg: "hover:bg-red-400/10",
      buttonText: "hover:text-red-400",
    },
    blue: {
      border: "hover:border-blue-400",
      buttonBorder: "hover:border-blue-400",
      buttonBg: "hover:bg-blue-400/10",
      buttonText: "hover:text-blue-400",
    },
    purple: {
      border: "hover:border-purple-400",
      buttonBorder: "hover:border-purple-400",
      buttonBg: "hover:bg-purple-400/10",
      buttonText: "hover:text-purple-400",
    },
    green: {
      border: "hover:border-green-400",
      buttonBorder: "hover:border-green-400",
      buttonBg: "hover:bg-green-400/10",
      buttonText: "hover:text-green-400",
    },
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden px-3 sm:px-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />

      <section className="text-center mt-16 md:mt-24 z-10 w-full max-w-6xl pb-4 px-2 sm:px-4">
        {/* Responsive heading */}
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono my-4 md:my-8`}
        >
          <FuzzyText
            baseIntensity={0.1}
            hoverIntensity={0.3}
            color="red"
            fontSize="clamp(28px, 6vw, 48px)"
          >
            Our Services
          </FuzzyText>
        </h1>

        {/* Services grid - 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, index) => {
            const hover =
              hoverClasses[service.color as keyof typeof hoverClasses];
            return (
              <div
                key={index}
                className={`
                  relative p-3 sm:p-6 rounded-lg 
                  border border-white/20 
                  ${hover.border}
                  transition-all duration-300 
                  group overflow-hidden h-full flex flex-col
                  bg-black/40 backdrop-blur-md
                  hover:bg-black/50 hover:backdrop-blur-lg
                  shadow-md hover:shadow-lg
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
                  <div
                    className={`text-2xl sm:text-4xl mb-2 sm:mb-4 text-${service.color}-400`}
                  >
                    {service.icon}
                  </div>

                  {/* Service title */}
                  <h3
                    className={`text-lg sm:text-2xl font-bold font-mono mb-1 sm:mb-3 text-${service.color}-400`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 font-mono flex-grow leading-tight">
                    {service.description}
                  </p>

                  {/* Features list - responsive height */}
                  <ul className="mb-3 sm:mb-6 space-y-1 min-h-[80px] sm:min-h-[120px]">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start font-mono text-[10px] sm:text-xs text-gray-400"
                      >
                        <span
                          className={`text-${service.color}-400 mr-1 sm:mr-2`}
                        >
                          ▹
                        </span>
                        <span className="text-left break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA - fixed at bottom */}
                  <div className="mt-auto pt-2 sm:pt-4 border-t border-white/20">
                    <p
                      className={`text-sm sm:text-lg font-bold text-${service.color}-400 font-mono mb-1 sm:mb-3`}
                    >
                      {service.price}
                    </p>
                    <button
                      className={`
                        w-full py-1 sm:py-2 text-[10px] sm:text-xs font-mono 
                        border border-white/20
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

        {/* Enterprise CTA - Responsive */}
        <div
          className={`mt-4 sm:mt-6 p-4 sm:p-8 rounded-lg max-w-4xl mx-auto ${styles.glassEffect}`}
        >
          <h2
            className={`text-xl sm:text-3xl font-bold text-red-400 mb-1 sm:mb-3 font-mono ${styles.glowRed}`}
          >
            ENTERPRISE SOLUTIONS
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-mono mb-2 sm:mb-4 leading-tight">
            Need something custom? We architect bespoke solutions for
            large-scale operations with SLA guarantees.
          </p>
          <button
            className={`px-4 sm:px-8 py-1 sm:py-3 text-xs sm:text-base bg-red-500 hover:bg-red-600 rounded-lg font-bold font-mono ${styles.glowRed}`}
          >
            CONTACT_SPECIALISTS
          </button>
        </div>
      </section>

      {/* Terminal-like footer - responsive text size */}
      <footer className="py-3 sm:py-6 w-full text-center text-gray-500 text-[10px] sm:text-sm font-mono">
        <p>
          (root@0xpwns3c)-[~/services] #{" "}
          <span className={styles.typingEffect}>services initialized...</span>
        </p>
      </footer>
    </main>
  );
}
