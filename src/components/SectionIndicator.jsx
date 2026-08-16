import React from 'react';

export default function SectionIndicator({ sectionNumber, showSocials = true, showScrollRight = false }) {
  return (
    <>
      {/* Left Persistent Social & Section Rail */}
      <div className="hidden lg:flex absolute left-6 md:left-10 top-0 bottom-0 flex-col items-center justify-between py-12 z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-4">
          <span className="text-sm font-bold text-[#FF5035] tracking-widest font-mono">
            {sectionNumber}
          </span>
          <div className="w-[1px] h-16 bg-[rgba(214,200,176,0.15)]" />
        </div>
      </div>

      {/* Right Persistent Vertical SCROLL Rail */}
      {showScrollRight && (
        <div className="hidden lg:flex absolute right-6 md:right-10 top-0 bottom-0 flex-col items-center justify-center gap-4 z-20 pointer-events-none">
          <span className="text-[10px] font-bold text-[#8C8375] tracking-[0.3em] uppercase rotate-90 origin-center whitespace-nowrap">
            SCROLL
          </span>
          <div className="w-[1px] h-16 bg-[rgba(214,200,176,0.15)] mt-4" />
        </div>
      )}
    </>
  );
}
