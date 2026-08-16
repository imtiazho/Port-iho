import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [dhakaTime, setDhakaTime] = useState('');
  const [copied, setCopied] = useState(false);

  const directEmail = 'minhpham.design@gmail.com';

  // Live Dhaka Time Clock (GMT+6)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setDhakaTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="w-full border-t border-[#D6C8B0]/15 bg-[#090909] py-8 px-6 md:px-12 selection:bg-[#FF5035] selection:text-black relative z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 font-mono text-xs text-[#8C8375]">
        
        {/* Left Side: Copyright & Blinking System Availability Status */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-center lg:text-left">
          <span className="text-[#D6C8B0] font-bold">
            © 2026 IMTIAZ • ALL RIGHTS RESERVED
          </span>
          <span className="text-[#D6C8B0]/20 hidden sm:inline">•</span>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
            <span className="text-[#FF5035] uppercase font-bold tracking-wider">
              [SYSTEM: AVAILABLE FOR HIRE]
            </span>
          </div>
        </div>

        {/* Center Side: Essential Professional Links & Direct Email Action */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6C8B0] hover:text-[#FF5035] hover:underline underline-offset-4 transition-colors font-semibold"
          >
            [GITHUB ↗]
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6C8B0] hover:text-[#FF5035] hover:underline underline-offset-4 transition-colors font-semibold"
          >
            [LINKEDIN ↗]
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6C8B0] hover:text-[#FF5035] hover:underline underline-offset-4 transition-colors font-semibold"
          >
            [X / TWITTER ↗]
          </a>
        </div>

        {/* Right Side: Live Dhaka Time Widget & Back to Top Trigger */}
        <div className="flex items-center justify-center lg:justify-end gap-5">
          {/* Live Dhaka Time Widget */}
          <div className="flex items-center gap-2 bg-[#111111] border border-[#D6C8B0]/15 px-3 py-1 rounded-md text-[11px]">
            <span className="text-[#8C8375] uppercase">DHAKA, BD • GMT+6</span>
            <span className="text-[#FF5035] font-bold">{dhakaTime || '12:00:00 AM'}</span>
          </div>

          {/* Interactive Back to Top Trigger */}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-[#D6C8B0] hover:text-[#FF5035] hover:underline underline-offset-4 transition-colors font-bold uppercase cursor-pointer"
          >
            [ BACK TO TOP ↑ ]
          </button>
        </div>

      </div>
    </footer>
  );
}
