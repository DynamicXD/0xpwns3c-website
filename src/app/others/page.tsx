import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';

export default function OthersPage() {
  const sections = [
    {
      title: "DOWNLOADS",
      description: "Get our security tools and open-source projects",
      icon: "💾",
      color: "blue",
      links: [
        { name: "UNPWN3D OS v4.2.1", url: "#" },
        { name: "Red Team Toolkit", url: "#" },
        { name: "Forensics Utilities", url: "#" },
        { name: "GitHub Repository", url: "#" }
      ]
    },
    {
      title: "WRITEUPS",
      description: "Technical breakdowns of our security research",
      icon: "📜",
      color: "purple",
      links: [
        { name: "CTF Solutions", url: "#" },
        { name: "Vulnerability Reports", url: "#" },
        { name: "Hardware Hacks", url: "#" },
        { name: "Malware Analysis", url: "#" }
      ]
    },
    {
      title: "CAREERS",
      description: "Join our cyber defense team",
      icon: "👾",
      color: "green",
      links: [
        { name: "Open Positions", url: "#" },
        { name: "Internship Program", url: "#" },
        { name: "Researcher Grants", url: "#" },
        { name: "Submit CV", url: "#" }
      ]
    },
    {
      title: "LEGAL",
      description: "Our policies and compliance information",
      icon: "⚖️",
      color: "red",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Responsible Disclosure", url: "#" },
        { name: "Data Processing Agreement", url: "#" }
      ]
    }
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden px-4 sm:px-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />
      
      <section className="text-center mt-20 md:mt-24 z-10 w-full max-w-6xl pb-8 md:pb-12">
        {/* Responsive heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono my-6 md:my-8`}>
          <FuzzyText 
            baseIntensity={0.1} 
            hoverIntensity={0.3} 
            color='red' 
            fontSize="clamp(32px, 6vw, 48px)"
          >
            Other Stuffs
          </FuzzyText>
        </h1>

        {/* Responsive grid - 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`
                relative p-4 sm:p-6 rounded-lg 
                border border-${section.color}-400/20 
                hover:border-${section.color}-400
                transition-all duration-500
                group overflow-hidden
                bg-black/40 backdrop-blur-lg
                hover:backdrop-blur-xl
              `}
            >
              {/* Section Header - stacked on mobile if needed */}
              <div className="flex items-center mb-3 sm:mb-4">
                <span className={`text-2xl sm:text-3xl mr-2 sm:mr-3 text-${section.color}-400`}>{section.icon}</span>
                <h2 className={`text-xl sm:text-2xl font-bold font-mono text-${section.color}-400`}>
                  {section.title}
                </h2>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 font-mono">
                {section.description}
              </p>
              
              {/* Links List */}
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.url}
                      className={`
                        block px-2 sm:px-3 py-1 sm:py-2 text-xs font-mono 
                        border border-white/10 
                        hover:border-${section.color}-400
                        hover:text-${section.color}-400
                        hover:bg-${section.color}-400/10
                        transition-all
                        flex items-center
                      `}
                    >
                      <span className={`text-${section.color}-400 mr-1 sm:mr-2`}>▸</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-${section.color}-900/10 to-black/80 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Footer Note - responsive padding and text */}
        <div className={`mt-8 sm:mt-16 p-4 sm:p-6 rounded-lg border border-white/10 max-w-3xl mx-auto ${styles.glassEffect}`}>
          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            All systems operational. Last updated: {new Date().toLocaleDateString('en-IN')} | 
            <span className="text-green-400 ml-1 sm:ml-2">SECURE CONNECTION ESTABLISHED</span>
          </p>
        </div>
      </section>

      {/* Terminal Footer - responsive text size */}
      <footer className="mt-auto py-4 sm:py-6 w-full text-center text-gray-500 text-xs sm:text-sm font-mono">
        <p>(root@0xpwns3c)-[~/other] # <span className={styles.typingEffect}>navigate_secondary_systems...</span></p>
      </footer>
    </main>
  );
}