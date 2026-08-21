import React from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useGitHubData } from "../utils/useGitHubData";

export default function GitHubStats() {
  const { publicRepos, totalContributions, loading } =
    useGitHubData("imtiazho");

  const statCards = [
    {
      label: "Public Repositories",
      value: (publicRepos ?? 106).toLocaleString(),
      subtext: "Live GitHub Repos",
    },
    {
      label: "2026 Contributions",
      value: `${totalContributions.toLocaleString()}+`,
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
  const commitLogs = [
    {
      repo: "zapshift-app",
      message: "feat: Stripe payment intent & parcel tracking webhooks",
      tag: "FEATURE",
    },
    {
      repo: "smart-deals",
      message: "refactor: optimize product filtering & query indexes",
      tag: "PERF",
    },
    {
      repo: "edumanage-dashboard",
      message: "fix: student analytics re-rendering & performance audit",
      tag: "STABILITY",
    },
  ];

  const githubMetrics = [
    {
      label: "Codebase Activity",
      value: "Daily Commits & PRs",
      detail: "Active Open Source & Private Repos",
    },
    {
      label: "Version Control Workflow",
      value: "Git / GitHub / CI",
      detail: "Structured Branching & PR Reviews",
    },
    {
      label: "Code Organization",
      value: "Modular & Documented",
      detail: "Clean Architecture & Readme Standards",
    },
  ];

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
              Engineering <span className="text-[#FF5035]"> Heatmap</span>
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

        <div className="bg-[#090909] border border-[rgba(214,200,176,0.12)] p-5 rounded-lg space-y-3 font-mono">
          {/* GitHub Specific Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs text-[#8C8375]">
            <span className="flex items-center gap-1.5 text-[#D6C8B0]">
              <span className="text-[#FF5035]">⚡</span> GITHUB_WORKFLOW_METRICS
            </span>
            <span className="text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
              PROFILE_ACTIVE
            </span>
          </div>

          {/* Metric Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {githubMetrics.map((item, i) => (
              <div
                key={i}
                className="bg-[#111111] p-3.5 rounded border border-white/5 space-y-1 hover:border-[#FF5035]/40 transition-colors"
              >
                <span className="text-[10px] text-[#8C8375] uppercase block font-bold">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-white block">
                  {item.value}
                </span>
                <span className="text-[10px] text-[#FF5035] block">
                  ● {item.detail}
                </span>
              </div>
            ))}
          </div>


          <div className="space-y-2.5 text-xs">
            {commitLogs.map((log, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[#D6C8B0]"
              >
                <span className="truncate">
                  <span className="text-[#FF5035]">[{log.repo}]</span>{" "}
                  {log.message}
                </span>
                <span className="text-[10px] text-[#8C8375] bg-[#111111] px-2 py-0.5 rounded border border-white/5 shrink-0 self-start sm:self-auto">
                  {log.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
