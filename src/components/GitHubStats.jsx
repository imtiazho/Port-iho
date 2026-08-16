import React from "react";
import { motion } from "framer-motion";

export default function GitHubStats() {
  const stats = [
    { label: "Total Contributions", value: "1,480+", change: "2026 Active" },
    { label: "Longest Streak", value: "42 Days", change: "Current Active" },
    { label: "Repositories Shipped", value: "68+", change: "Open Source" },
    { label: "Code Reviews", value: "320+", change: "Top Contributor" },
  ];

  const languages = [
    { name: "TypeScript & React", percent: 45, color: "#FF5035" },
    { name: "Three.js / WebGL", percent: 30, color: "#D6C8B0" },
    { name: "Tailwind & CSS Tokens", percent: 15, color: "#8C8375" },
    { name: "Node.js & Python API", percent: 10, color: "#00E5FF" },
  ];

  return (
    <section
      id="github-stats"
      className="relative w-full bg-[#0B0B0B] text-[#D6C8B0] py-16 sm:py-24 px-4 sm:px-8 lg:px-24 border-b border-[rgba(214,200,176,0.12)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#FF5035] uppercase font-bold">
                [ OPEN SOURCE ACTIVITY ]
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#D6C8B0] uppercase max-w-4xl"
            >
              Live GitHub Stats &{" "}
              <span className="text-[#FF5035]">Engineering Activity</span>
            </motion.h2>
          </div>

          <a
            href="https://github.com/imtiazho"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider text-[#D6C8B0] border border-[rgba(214,200,176,0.25)] rounded-full hover:border-[#FF5035] hover:text-white transition-all"
          >
            <span>VIEW GITHUB PROFILE</span>
            <span>↗</span>
          </a>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#090909] border border-[rgba(214,200,176,0.12)] p-5 rounded-lg space-y-2 hover:border-[#FF5035]/50 transition-colors shadow-lg"
            >
              <span className="text-xs text-[#8C8375] font-mono uppercase block">
                {stat.label}
              </span>
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-white block">
                {stat.value}
              </span>
              <span className="text-[10px] text-[#FF5035] font-mono block">
                ● {stat.change}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph Preview & Language Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#090909] border border-[rgba(214,200,176,0.15)] p-6 sm:p-8 rounded-xl">
          {/* Left Column: Top Languages Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-xl font-bold text-white">
              Primary Tech Stack Distribution
            </h3>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#D6C8B0] font-semibold">
                      {lang.name}
                    </span>
                    <span className="text-[#8C8375]">{lang.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: lang.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: GitHub Readme Stats Activity Card */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center">
            <div className="w-full bg-[#050505] border border-[rgba(214,200,176,0.1)] p-4 sm:p-6 rounded-lg text-center space-y-4">
              <span className="text-xs font-mono text-[#8C8375] uppercase block">
                Continuous Integration & Commit Streak
              </span>

              {/* GitHub Contribution Grid Visual Fallback */}
              <div className="grid grid-cols-12 sm:grid-cols-16 gap-1.5 py-4 max-w-md mx-auto">
                {Array.from({ length: 48 }).map((_, i) => {
                  const intensity = (i * 7) % 5;
                  const bg =
                    intensity === 0
                      ? "#161616"
                      : intensity === 1
                        ? "#FF5035"
                        : intensity === 2
                          ? "#993020"
                          : "#44150e";
                  return (
                    <div
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm transition-transform hover:scale-125 cursor-pointer"
                      style={{ backgroundColor: bg }}
                      title={`Day ${i + 1}: ${intensity * 3} contributions`}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#8C8375]">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#161616]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#44150e]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#993020]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#FF5035]" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
