import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from "@/components/FuzzyText";
import DecryptedText from "@/components/DecryptedText";
import { useMemo } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 0xpwns3c",
};

export default function AboutPage() {
  const teamMembers = useMemo(() => {
    return [
      {
        name: "d7n4m1c",
        role: "The Polymath | Web Artificer & Red Team Operator",
      },
      {
        name: "m4v3r1ck",
        role: "The Breach Artist | Exploit Alchemist & CTF Champion",
      },
      {
        name: "n0n4m3d.ex3",
        role: "The Ghost Protocol | Frontend Phantom & Puzzle Reaper",
      },
      {
        name: "d4rk1n",
        role: "The Shadow Architect | Vulnerability Hunter & Binary Overlord",
      },
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

      {/* Main Content */}
      <section className="text-center mt-16 md:mt-24 z-10 w-full max-w-6xl px-2 sm:px-4">
        {/* Responsive Heading */}
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono my-4 md:my-7`}
        >
          <FuzzyText
            baseIntensity={0.1}
            hoverIntensity={0.3}
            color="red"
            fontSize="clamp(28px, 6vw, 48px)"
          >
            About 0xpwns3c
          </FuzzyText>
        </h1>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 text-left">
          <div className={`p-3 sm:p-6 rounded-lg ${styles.glassEffect}`}>
            <h2 className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 sm:mb-4 font-mono">
              {">"}{" "}
              <DecryptedText
                text="mission"
                speed={150}
                maxIterations={5}
                characters="$#@!?"
                revealDirection="start"
              />
            </h2>
            <p className="text-xs sm:text-base text-gray-300 font-mono leading-relaxed">
              <DecryptedText
                text="We decrypt the future of digital experiences. Our mission is to build secure, innovative solutions that push boundaries while remaining accessible to everyone."
                speed={200}
                maxIterations={7}
                characters="01x#@!?"
                animateOn="view"
              />
            </p>
          </div>

          <div className={`p-3 sm:p-6 rounded-lg ${styles.glassEffect}`}>
            <h2 className="text-lg sm:text-2xl font-bold text-purple-400 mb-2 sm:mb-4 font-mono">
              {">"}{" "}
              <DecryptedText
                text="core_values"
                speed={150}
                maxIterations={5}
                characters="$#@!?"
                revealDirection="start"
              />
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-base text-gray-300 font-mono space-y-1 sm:space-y-2">
              <li className="break-words">
                <DecryptedText
                  text="Security-first approach"
                  speed={150}
                  maxIterations={4}
                  animateOn="view"
                />
              </li>
              <li className="break-words">
                <DecryptedText
                  text="Open source philosophy"
                  speed={150}
                  maxIterations={4}
                  animateOn="view"
                />
              </li>
              <li className="break-words">
                <DecryptedText
                  text="Continuous learning"
                  speed={150}
                  maxIterations={4}
                  animateOn="view"
                />
              </li>
              <li className="break-words">
                <DecryptedText
                  text="Ethical hacking mindset"
                  speed={150}
                  maxIterations={4}
                  animateOn="view"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`mt-6 sm:mt-12 p-3 sm:p-6 md:p-8 rounded-lg ${styles.glassEffect} w-full`}
        >
          <h2 className="text-xl sm:text-3xl font-bold text-green-400 mb-3 sm:mb-6 font-mono">
            {">"}{" "}
            <DecryptedText
              text="team_matrix"
              speed={150}
              maxIterations={5}
              characters="$#@!?"
              revealDirection="start"
            />
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className={`p-2 sm:p-4 border border-gray-700 rounded hover:border-red-400 transition-all ${styles.glassEffect} backdrop-blur-sm`}
              >
                <div className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 mx-auto mb-2 sm:mb-4 rounded-full bg-gray-800 border-2 border-red-400" />
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-red-400 font-mono break-words">
                  <DecryptedText
                    text={member.name}
                    speed={120}
                    maxIterations={3}
                    characters="01x#@!?"
                    animateOn="view"
                  />
                </h3>
                <p className="text-[10px] sm:text-sm text-gray-400 font-mono mt-1 sm:mt-2 leading-tight">
                  <DecryptedText
                    text={member.role}
                    speed={150}
                    maxIterations={4}
                    characters="01x#@!?"
                    animateOn="view"
                  />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-16">
          <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-6 font-mono">
            <DecryptedText
              text="Ready to take the red pill and see how deep the rabbit hole goes?"
              speed={180}
              maxIterations={6}
              animateOn="view"
              revealDirection="center"
            />
          </p>
          <button
            className={`px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-base bg-red-500 hover:bg-red-600 rounded-lg font-bold font-mono ${styles.glowRed} transition-colors`}
          >
            <DecryptedText
              text="JOIN_THE_RESISTANCE"
              speed={100}
              maxIterations={7}
              characters="01X#@!?"
            />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-3 sm:py-6 w-full text-center text-gray-500 text-[10px] sm:text-sm font-mono">
        <p>
          (root@0xpwns3c)-[~/about] #{" "}
          <span className={styles.typingEffect}>
            <DecryptedText
              text="initiating connection..."
              speed={120}
              maxIterations={4}
              characters="01x>|<#@!?"
              revealDirection="right"
            />
          </span>
        </p>
      </footer>
    </main>
  );
}
