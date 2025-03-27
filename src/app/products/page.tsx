import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | 0xpwns3c',
};

export default function ProductsPage() {
  const products = [
    {
      name: "UNPWN3D OS",
      tagline: "Multi-layered Anti-Virus System",
      description: "Enterprise-grade security for your personal devices with military-grade protection layers",
      features: [
        "🔍 Quick Scan & Full Scan – Instant and deep threat detection",
        "🛡️ Safe Browser – Protects against malicious websites",
        "🔌 USB Protection – Prevents unauthorized access",
        "🎭 Honeypots – Traps and analyzes malware",
        "🗂️ File Signature Recovery – Restores tampered files",
        "🐞 Malware Detection & Prevention – Blocks threats proactively",
        "⏪ Rollback System – Reverses malicious changes",
        "⚙️ Kernel Kill Switch – Ultimate system protection"
      ],
      price: "₹5,999/yr",
      color: "purple",
      icon: "🛡️",
      version: "v4.2.1"
    },
    {
      name: "UNPWN3D Device",
      tagline: "Hardened Security Gadget",
      description: "Physical security companion with embedded UNPWN3D OS and additional hardware protections",
      features: [
        "🔋 All UNPWN3D OS features pre-installed",
        "💽 Encrypted NVMe Storage (1TB)",
        "📶 Secure Hotspot with VPN tunneling",
        "🔐 Biometric authentication",
        "📡 RF Signal Jammer (optional)",
        "🛰️ GPS Spoofing Detection",
        "⚡ Emergency Data Purge Button",
        "🌐 Tor Network Gateway"
      ],
      price: "₹24,999",
      color: "green",
      icon: "📟",
      version: "X1-Pro"
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
      
      <section className="text-center mt-20 md:mt-24 z-10 w-full max-w-6xl pb-6">
        {/* Responsive heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono my-6 md:my-10`}>
          <FuzzyText 
            baseIntensity={0.1} 
            hoverIntensity={0.3} 
            color='red' 
            fontSize="clamp(32px, 6vw, 48px)"
          >
            Our Cyber Arsenal
          </FuzzyText>
        </h1>

        {/* Products grid - single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`
                relative p-6 sm:p-8 rounded-xl 
                border border-white/20
                hover:border-${product.color}-400
                transition-all duration-500
                group overflow-hidden
                bg-black/50 backdrop-blur-lg
                hover:backdrop-blur-xl
                shadow-lg sm:shadow-2xl hover:shadow-${product.color}-400/20
              `}
            >
              {/* Version tag */}
              <span className={`absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 text-xs font-mono bg-${product.color}-900/50 text-${product.color}-400 rounded`}>
                {product.version}
              </span>
              
              {/* Product header - stacked on mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <span className={`text-4xl sm:text-5xl mb-3 sm:mb-0 sm:mr-4 text-${product.color}-400`}>{product.icon}</span>
                <div className="text-center sm:text-left">
                  <h2 className={`text-2xl sm:text-3xl font-bold font-mono text-${product.color}-400`}>
                    {product.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-400 font-mono">{product.tagline}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-mono text-center">
                {product.description}
              </p>
              
              {/* Features list with animated bullets */}
              <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                {product.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start font-mono text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <span className={`mr-2 sm:mr-3 text-${product.color}-400 group-hover:animate-pulse`}>
                      {feature.split(' – ')[0]}
                    </span>
                    <span>{feature.split(' – ')[1]}</span>
                  </li>
                ))}
              </ul>
              
              {/* Price and CTA - stacked buttons on mobile */}
              <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-800">
                <p className={`text-xl sm:text-2xl font-bold text-${product.color}-400 font-mono mb-3 sm:mb-4`}>
                  {product.price}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className={`w-full sm:flex-1 py-2 sm:py-3 text-xs sm:text-sm font-mono border border-white/20 hover:border-${product.color}-400 hover:text-${product.color}-400 transition-all`}>
                    BUY_NOW
                  </button>
                  <button className={`w-full sm:flex-1 py-2 sm:py-3 text-xs sm:text-sm font-mono border border-white/20 hover:border-${product.color}-400 hover:text-${product.color}-400 transition-all`}>
                    LEARN_MORE
                  </button>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-${product.color}-900/10 to-black/80 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Comparison Section - responsive padding */}
        <div className={`mt-8 sm:mt-12 p-6 sm:p-8 rounded-lg ${styles.glassEffect} max-w-4xl mx-auto`}>
          <h2 className={`text-2xl sm:text-3xl font-bold text-blue-400 mb-3 sm:mb-4 font-mono ${styles.glowBlue}`}>
            [DIFFERENTIATOR]
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-mono mb-4 sm:mb-6">
            UNPWN3D Device includes all software features PLUS hardware-level security with physical controls.
          </p>
          <button className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-lg font-bold font-mono ${styles.glowBlue}`}>
            COMPARE_FEATURES
          </button>
        </div>
      </section>

      {/* Terminal footer - responsive text size */}
      <footer className="py-4 sm:py-6 w-full text-center text-gray-500 text-xs sm:text-sm font-mono">
        <p>(root@0xpwns3c)-[~/products] # <span className={styles.typingEffect}>next-gen_security_hardware/software_solutions</span></p>
      </footer>
    </main>
  );
}