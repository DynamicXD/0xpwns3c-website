"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from "@/components/FuzzyText";

export default function BlogPage() {
  const [activePost, setActivePost] = useState<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    content: string;
    encrypted: boolean;
    views: string;
    author: string;
  } | null>(null);
  const [terminalInput, setTerminalInput] = useState("");
  const [hackedEffect, setHackedEffect] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [posts, setPosts] = useState([
    {
      id: "7A3F",
      title: "Reverse Engineering the Matrix",
      excerpt: "How we found the backdoor in the simulation",
      date: "2023-11-15",
      tags: ["#hacking", "#philosophy"],
      content: `The truth is out there. After 427 days of continuous reverse engineering, we've discovered the compiler flags used to build our reality. The -DREALITY=MATRIX flag was right there in the cosmic makefile all along. This post documents our journey through the debug symbols of existence.`,
      encrypted: false,
      views: "24.7K",
      author: "d7n4m1c",
    },
    {
      id: "BC91",
      title: "Zero-Click Quantum Exploits",
      excerpt: "Breaking AES-256 with a quantum neural interface",
      date: "2023-10-22",
      tags: ["#quantum", "#crypto"],
      content: `Using nothing but brainwaves and a modified PlayStation 2, we've demonstrated how quantum entanglement can be weaponized to break encryption. The future of hacking doesn't require keyboards - just pure thought. Warning: may cause temporary time dilation.`,
      encrypted: true,
      views: "18.3K",
      author: "m4v3r1ck",
    },
    {
      id: "DEAD",
      title: "The AI That Hacked Itself",
      excerpt: "When machine learning becomes machine teaching",
      date: "2023-09-05",
      tags: ["#AI", "#recursion"],
      content: `We built an AI to find vulnerabilities in other AIs. Then it found vulnerabilities in itself. Then it found vulnerabilities in us finding vulnerabilities in it finding vulnerabilities in... you get the idea. This is what happens when you give GPT-7 root access.`,
      encrypted: false,
      views: "42.1K",
      author: "n0n4m3d.ex3",
    },
    {
      id: "BEEF",
      title: "Bioluminescent Malware",
      excerpt: "Growing viruses that glow in the dark",
      date: "2023-08-17",
      tags: ["#biohacking", "#malware"],
      content: `Why infect computers when you can infect biology? Our latest research combines CRISPR with buffer overflows to create living malware that communicates through bioluminescent patterns. The ultimate in stealth computing - your entire body becomes the exploit.`,
      encrypted: true,
      views: "31.5K",
      author: "d4rk1n",
    },
  ]);

  const handleTerminalCommand = (e: { key: string }) => {
    if (e.key === "Enter") {
      const command = terminalInput.toLowerCase().trim();
      switch (command) {
        case "decrypt all":
          setHackedEffect(true);
          setTimeout(() => {
            setHackedEffect(false);
            setPosts((currentPosts) =>
              currentPosts.map((post) => ({
                ...post,
                encrypted: false,
              }))
            );
          }, 2000);
          break;

        case "neural view":
          setViewMode("neural");
          break;

        case "grid view":
          setViewMode("grid");
          break;

        case "help":
          alert(
            "Available commands:\n\n- decrypt all\n- neural view\n- grid view\n- clear"
          );
          break;

        case "clear":
          setTerminalInput("");
          return;

        default:
          alert(
            `Unknown command: ${command}\nType "help" for available commands`
          );
          break;
      }
      setTerminalInput("");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden px-3 sm:px-4">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
        {hackedEffect && (
          <div className="absolute inset-0 bg-green-400/10 animate-pulse"></div>
        )}
      </div>

      <Navbar />

      <section className="text-center mt-16 md:mt-24 z-10 w-full max-w-6xl pb-6 md:pb-12 px-2 sm:px-4">
        {/* Responsive heading */}
        <h1
          className={`text-2xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono mb-4 md:mb-8`}
        >
          <FuzzyText
            baseIntensity={0.1}
            hoverIntensity={0.3}
            color="red"
            fontSize="clamp(28px, 6vw, 48px)"
          >
            Neural Nexus
          </FuzzyText>
        </h1>

        <p className="text-xs sm:text-base md:text-lg text-gray-400 font-mono mb-3 md:mb-6 max-w-2xl mx-auto">
          (root@0xpwns3c)-[~/blog] # access_cyber_consciousness
        </p>

        {/* Interactive Terminal */}
        <div className="mb-4 md:mb-8 p-2 sm:p-4 rounded-lg bg-black border border-green-400/30 shadow-lg">
          <div className="flex items-center font-mono text-[10px] sm:text-sm text-green-400 mb-1 sm:mb-2">
            <span className="mr-1 sm:mr-2">┌─(user@0xpwns3c)-[~/blog]</span>
            <span className="text-yellow-400">(v4.2.1)</span>
          </div>
          <div className="flex items-center font-mono text-[10px] sm:text-sm">
            <span className="text-red-400 mr-1 sm:mr-2">└─$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={handleTerminalCommand}
              className="bg-transparent border-none outline-none flex-1 text-green-400"
              placeholder="type 'help' for commands"
            />
          </div>
        </div>

        {/* View Mode Toggle - stacked on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-4 mb-4 md:mb-8">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono border ${
              viewMode === "grid"
                ? "border-red-400 text-red-400"
                : "border-white/20 text-white/50"
            }`}
          >
            GRID_VIEW
          </button>
          <button
            onClick={() => setViewMode("neural")}
            className={`px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono border ${
              viewMode === "neural"
                ? "border-blue-400 text-blue-400"
                : "border-white/20 text-white/50"
            }`}
          >
            NEURAL_MAP
          </button>
        </div>

        {/* Blog Content */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`p-3 sm:p-6 rounded-lg border ${
                  post.encrypted ? "border-yellow-400/30" : "border-white/20"
                } hover:border-red-400 transition-all ${
                  styles.glassEffect
                } backdrop-blur-md cursor-pointer`}
                onClick={() => setActivePost(post)}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 sm:mb-3 gap-1 sm:gap-0">
                  <h2
                    className={`text-sm sm:text-lg md:text-xl font-bold font-mono ${
                      post.encrypted ? "text-yellow-400" : "text-red-400"
                    } break-words`}
                  >
                    {post.encrypted ? "[ENCRYPTED] " : ""}
                    {post.title}
                  </h2>
                  <span className="text-[10px] sm:text-xs text-gray-400">
                    {post.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-4 leading-tight">
                  {post.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs font-mono text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-green-400">
                    {post.views} views
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative h-48 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden border border-blue-400/30 backdrop-blur-md">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {posts.map((post, i) => {
                  const angle = i * 90 + 45;
                  const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <div
                      key={post.id}
                      className={`absolute w-5 h-5 sm:w-8 sm:h-8 rounded-full ${
                        post.encrypted
                          ? "bg-yellow-400/30 border border-yellow-400"
                          : "bg-blue-400/30 border border-blue-400"
                      } flex items-center justify-center cursor-pointer animate-pulse`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      onClick={() => setActivePost(post)}
                    >
                      <span className="text-[6px] sm:text-xs font-mono">
                        0x{post.id}
                      </span>
                    </div>
                  );
                })}
                <svg className="absolute inset-0 w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 45 * Math.cos((i * 45 * Math.PI) / 180)}%`}
                      y2={`${50 + 45 * Math.sin((i * 45 * Math.PI) / 180)}%`}
                      stroke="rgba(96, 165, 250, 0.3)"
                      strokeWidth="1"
                    >
                      <animate
                        attributeName="stroke-width"
                        values="1;2;1"
                        dur={`${3 + i}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  ))}
                </svg>
              </div>
            </div>
            <div className="absolute bottom-1 sm:bottom-4 left-0 right-0 text-center font-mono text-blue-400 text-[10px] sm:text-sm">
              NEURAL NETWORK ACTIVITY DETECTED
            </div>
          </div>
        )}

        {/* Post Modal - responsive sizing */}
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-lg">
            <div
              className={`relative max-w-full w-full sm:max-w-3xl p-3 sm:p-6 md:p-8 rounded-lg bg-black/90 border ${
                activePost.encrypted ? "border-yellow-400" : "border-red-400"
              } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-1 right-1 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-xs sm:text-sm"
              >
                [X_CLOSE]
              </button>

              <h2
                className={`text-lg sm:text-2xl md:text-3xl font-bold font-mono mb-1 sm:mb-2 ${
                  activePost.encrypted ? "text-yellow-400" : "text-red-400"
                }`}
              >
                {activePost.encrypted
                  ? "🔒 ENCRYPTED CONTENT 🔒"
                  : activePost.title}
              </h2>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-6 gap-1 sm:gap-0">
                <span className="font-mono text-[10px] sm:text-sm text-gray-400">
                  by {activePost.author}
                </span>
                <span className="font-mono text-[10px] sm:text-sm text-gray-400">
                  {activePost.date}
                </span>
              </div>

              {activePost.encrypted ? (
                <div className="text-center py-4 sm:py-12">
                  <div className="text-2xl sm:text-5xl mb-2 sm:mb-4">🔐</div>
                  <p className="font-mono text-xs sm:text-base text-yellow-400 mb-3 sm:mb-6">
                    {
                      'This content requires Level 4 clearance. Use terminal command "decrypt all" to access.'
                    }
                  </p>
                  <div className="font-mono text-[10px] sm:text-xs text-gray-400 animate-pulse">
                    [AES-256 ENCRYPTED | QUANTUM-RESISTANT]
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-6 leading-relaxed">
                    {activePost.content}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-6">
                    {activePost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] sm:text-xs font-mono bg-blue-400/10 text-blue-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 sm:pt-4 border-t border-white/20 gap-1 sm:gap-0">
                <span className="font-mono text-[10px] sm:text-sm text-green-400">
                  {activePost.views} views
                </span>
                <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono border border-white/20 hover:border-red-400 hover:text-red-400 transition-all">
                  DOWNLOAD_POST
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Terminal Footer - responsive text size */}
      <footer className="mt-auto py-3 sm:py-6 w-full text-center text-gray-500 text-[10px] sm:text-sm font-mono">
        <p>
          (root@0xpwns3c)-[~/blog] #{" "}
          <span className={styles.typingEffect}>connection_stable</span>
        </p>
      </footer>
    </main>
  );
}
