import React, { useState, useEffect } from 'react';

export default function LocalStatus({ variant = 'default' }) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time specifically for Asia/Dhaka time zone (GMT+6)
      const options = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeString(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isCompact = variant === 'compact';

  return (
    <div className={`inline-flex flex-wrap items-center gap-3 text-xs font-mono ${
      isCompact ? 'py-1 px-3 text-[11px]' : ''
    }`}>
      {/* Location & Ticking Clock */}
      <div className="flex items-center gap-2 text-[#D6C8B0]">
        <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
        <span className="font-bold tracking-wider uppercase text-white">DHAKA, BD</span>
        <span className="text-[#8C8375]">—</span>
        <span className="text-[#FF5035] font-bold">{timeString || '06:26:00 AM'}</span>
        <span className="text-[10px] text-[#8C8375]">(GMT+6)</span>
      </div>

      <div className="hidden sm:block w-[1px] h-3 bg-[rgba(214,200,176,0.2)]" />

      {/* Live Weather Pill */}
      <div className="flex items-center gap-1.5 text-[#D6C8B0]">
        <span>🌤️</span>
        <span className="font-semibold text-white">28°C</span>
        <span className="text-[10px] text-[#8C8375] uppercase">Clear</span>
      </div>
    </div>
  );
}
