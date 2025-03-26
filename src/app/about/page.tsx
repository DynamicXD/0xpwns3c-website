import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      {/* Animated Grid Background (same as home) */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />
      
      {/* Main About Content */}
      <section className="text-center mt-24 z-10 max-w-4xl px-6">
        <h1 className={`text-5xl font-bold text-red-400 ${styles.glowRed} font-mono mb-8`}>
          <FuzzyText baseIntensity={0.1} hoverIntensity={0.3} color='red' fontSize={48}>
            About 0xpwns3c
          </FuzzyText>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Mission Section */}
          <div className={`p-6 rounded-lg ${styles.glassEffect}`}>
            <h2 className="text-2xl font-bold text-blue-400 mb-4 font-mono">{'>'} mission</h2>
            <p className="text-gray-300 font-mono">
              We decrypt the future of digital experiences. Our mission is to build 
              secure, innovative solutions that push boundaries while remaining 
              accessible to everyone.
            </p>
          </div>
          
          {/* Values Section */}
          <div className={`p-6 rounded-lg ${styles.glassEffect}`}>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 font-mono">{'>'} core_values</h2>
            <ul className="list-disc list-inside text-gray-300 font-mono space-y-2">
              <li>Security-first approach</li>
              <li>Open source philosophy</li>
              <li>Continuous learning</li>
              <li>Ethical hacking mindset</li>
            </ul>
          </div>
        </div>
        
        {/* Team Section */}
        <div className={`mt-12 p-8 rounded-lg ${styles.glassEffect}`}>
          <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">{'>'} team_matrix</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Neo', 'Trinity', 'Morpheus'].map((name) => (
              <div key={name} className="p-4 border border-gray-700 rounded hover:border-red-400 transition-all">
                <div className="h-32 w-32 mx-auto mb-4 rounded-full bg-gray-800 border-2 border-red-400" />
                <h3 className="text-xl font-bold text-red-400 font-mono">{name}</h3>
                <p className="text-gray-400 font-mono text-sm mt-2">
                  {name === 'Neo' && 'The One | Full Stack Hacker'}
                  {name === 'Trinity' && 'Security Architect | Crypto Expert'}
                  {name === 'Morpheus' && 'Visionary | Tech Philosopher'}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16">
          <p className="text-lg text-gray-300 mb-6 font-mono">
            Ready to take the red pill and see how deep the rabbit hole goes?
          </p>
          <button className={`px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold font-mono ${styles.glowRed}`}>
            JOIN_THE_RESISTANCE
          </button>
        </div>
      </section>
      
      {/* Terminal-like footer */}
      <footer className="mt-auto py-6 w-full text-center text-gray-500 text-sm font-mono">
        <p>(root@0xpwns3c)-[~/about] # <span className={styles.typingEffect}>initiating connection...</span></p>
      </footer>
    </main>
  );
}