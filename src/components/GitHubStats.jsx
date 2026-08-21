import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useGitHubData } from "../utils/useGitHubData";

export default function GitHubStats() {
  const { publicRepos, totalContributions, loading } = useGitHubData("imtiazho");

  const statCards = [
    {
      label: "Public Repositories",
      value: (publicRepos ?? 106).toLocaleString(),
      subtext: "Live GitHub Repos",
    },
    {
      label: "2026 Contributions",
      value: `${(totalContributions).toLocaleString()}+`,
      subtext: "Active Engineering",
    },
    {
      label: "Primary Tech Ecosystem",
      value: "JavaScript / Node.js",
      subtext: "Core Tech Stack",
    },
  ];

  // Custom color scale matching dark theme portfolio palette
  const calendarTheme = {
    light: ["#161616", "#40150d", "#7d2617", "#c43d22", "#FF5035"],
    dark: ["#161616", "#40150d", "#7d2617", "#c43d22", "#FF5035"],
  };

  return (
    <section
      id="github-stats"
      className="relative w-full bg-[#0B0B0B] text-[#D6C8B0] py-16 sm:py-24 px-4 sm:px-8 lg:px-24 border-b border-[rgba(214,200,176,0.12)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
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

              {/* Header Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#090909] border border-[#10B981]/35 rounded-full text-xs font-mono font-semibold shadow-[0_0_12px_rgba(16,185,129,0.15)]"
              >
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                <span className="text-[#10B981] tracking-wider uppercase font-bold">
                  LIVE SYNCED: @imtiazho
                </span>
              </motion.div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#D6C8B0] uppercase max-w-4xl"
            >
              Live GitHub Activity &{" "}
              <span className="text-[#FF5035]">Engineering Heatmap</span>
            </motion.h2>
          </div>

          <a
            href="https://github.com/imtiazho"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold tracking-wider text-[#D6C8B0] border border-[rgba(214,200,176,0.25)] rounded-full hover:border-[#FF5035] hover:text-white transition-all bg-[#090909]/60 hover:bg-[#FF5035]/10"
          >
            <span>VIEW GITHUB PROFILE</span>
            <span>↗</span>
          </a>
        </div>

        {/* 3 CLEAN REAL STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {statCards.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#090909] border border-[rgba(214,200,176,0.12)] p-6 rounded-lg space-y-2 hover:border-[#FF5035]/50 transition-colors shadow-lg relative overflow-hidden"
            >
              <span className="text-xs text-[#8C8375] font-mono uppercase block">
                {stat.label}
              </span>

              {loading ? (
                <div className="animate-pulse bg-[#161616] rounded-lg h-9 w-24 my-1 border border-[#D6C8B0]/5" />
              ) : (
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-white block">
                  {stat.value}
                </span>
              )}

              <span className="text-[10px] text-[#FF5035] font-mono block">
                ● {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>

        {/* LIVE CONTRIBUTION HEATMAP (react-github-calendar) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#090909] border border-[rgba(214,200,176,0.15)] p-6 sm:p-8 rounded-xl"
        >
          <div className="w-full overflow-x-auto flex justify-center py-2 scrollbar-thin scrollbar-thumb-[#FF5035]/30 scrollbar-track-[#111111] text-[#D6C8B0]">
            <GitHubCalendar
              username="imtiazho"
              colorScheme="dark"
              theme={calendarTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
