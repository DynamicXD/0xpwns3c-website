import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';
import { useMemo } from 'react';

export default function AboutPage() {
  const teamMembers = useMemo(() => {
    return [
      { name: "d7n4m1c", role: "The Polymath | Web Artificer & Red Team Operator" },
      { name: "m4v3r1ck", role: "The Breach Artist | Exploit Alchemist & CTF Champion" },
      { name: "n0n4m3d.ex3", role: "The Ghost Protocol | Frontend Phantom & Puzzle Reaper" },
      { name: "d4rk1n", role: "The Shadow Architect | Vulnerability Hunter & Binary Overlord" },
    ].sort(() => Math.random() - 0.5); // Shuffle array randomly
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden px-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />

      {/* Main About Content - Added padding top for navbar space */}
      <section className="text-center mt-20 md:mt-24 z-10 w-full max-w-6xl px-4 sm:px-6">
        {/* Responsive heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono my-6 md:my-7`}>
          <FuzzyText 
            baseIntensity={0.1} 
            hoverIntensity={0.3} 
            color='red' 
            fontSize="clamp(32px, 6vw, 48px)"
          >
            About 0xpwns3c
          </FuzzyText>
        </h1>

        {/* Mission & Values - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-left">
          {/* Mission Section */}
          <div className={`p-4 sm:p-6 rounded-lg ${styles.glassEffect}`}>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4 font-mono">{'>'} mission</h2>
            <p className="text-sm sm:text-base text-gray-300 font-mono">
              We decrypt the future of digital experiences. Our mission is to build
              secure, innovative solutions that push boundaries while remaining
              accessible to everyone.
            </p>
          </div>

          {/* Values Section */}
          <div className={`p-4 sm:p-6 rounded-lg ${styles.glassEffect}`}>
            <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4 font-mono">{'>'} core_values</h2>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 font-mono space-y-1 sm:space-y-2">
              <li>Security-first approach</li>
              <li>Open source philosophy</li>
              <li>Continuous learning</li>
              <li>Ethical hacking mindset</li>
            </ul>
          </div>
        </div>

        {/* Team Section - 1 column on mobile, 4 on desktop */}
        <div className={`mt-8 sm:mt-12 p-4 sm:p-6 md:p-8 rounded-lg ${styles.glassEffect} w-full`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 sm:mb-6 font-mono">{'>'} team_matrix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.name} 
                className={`p-3 sm:p-4 border border-gray-700 rounded hover:border-red-400 transition-all ${styles.glassEffect} backdrop-blur-sm`}
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 mx-auto mb-3 sm:mb-4 rounded-full bg-gray-800 border-2 border-red-400" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-400 font-mono">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1 sm:mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-16">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 font-mono">
            Ready to take the red pill and see how deep the rabbit hole goes?
          </p>
          <button className={`px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-red-500 hover:bg-red-600 rounded-lg font-bold font-mono ${styles.glowRed}`}>
            JOIN_THE_RESISTANCE
          </button>
        </div>
      </section>

      {/* Terminal-like footer - smaller on mobile */}
      <footer className="mt-auto py-4 sm:py-6 w-full text-center text-gray-500 text-xs sm:text-sm font-mono">
        <p>(root@0xpwns3c)-[~/about] # <span className={styles.typingEffect}>initiating connection...</span></p>
      </footer>
    </main>
  );
}