import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />
      <section className="text-center mt-24 z-10">
        {/* Matrix-themed text with glowing effect */}

        <h1 className={`text-5xl font-bold text-red-400 ${styles.glowRed} font-mono`}>
          <FuzzyText
            baseIntensity={0.1}
            hoverIntensity={0.3}
            color='red'
            fontSize={48}
          >
            Neo, is that you?
          </FuzzyText>
        </h1>
        {/* Terminal-like text */}
        <p className="mt-4 text-lg text-red-300 font-mono">
          (root@0xpwns3c)-[~] #{" "}
          <span className={styles.typingEffect}>following the white rabbit...</span>
          <span className={`ml-1 ${styles.animateBlink}`}>_</span>
        </p>
      </section>
    </main>
  );
}