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

        {showSocials && (
          <div className="flex flex-col items-center gap-6 pointer-events-auto">
            {/* Dribbble / Globe Icon */}
            <a href="#" className="text-[#8C8375] hover:text-[#FF5035] transition-colors" title="Dribbble">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.002 8.002 0 0 1 1.942 5.143c-.477-.101-2.45-.487-4.908-.242-.14-.374-.294-.757-.457-1.144 2.802-1.373 3.32-3.626 3.423-3.757zM12 3.99c2.052 0 3.92.775 5.337 2.053-.133.158-.696 2.222-3.327 3.518-1.258-2.308-2.617-4.323-2.736-4.502A7.95 7.95 0 0 1 12 3.99zm-2.88 1.547c.108.163 1.442 2.13 2.684 4.417-3.414 1.05-6.841 1.026-7.014 1.025a7.994 7.994 0 0 1 4.33-5.442zM4.01 12.01c.21 0 3.25.016 6.326-.957.305.706.592 1.42.86 2.135-4.108 1.255-7.79 1.15-7.973 1.144a7.978 7.978 0 0 1-.213-2.322zm1.614 4.542c.21.006 3.488.082 7.23-1.127.766 2.11 1.082 3.935 1.14 4.28a7.989 7.989 0 0 1-8.37-3.153zm9.845 3.315c-.07-.406-.388-2.128-1.11-4.14 2.23-.29 4.148.064 4.555.15a7.982 7.982 0 0 1-3.445 3.99z"/>
              </svg>
            </a>
            {/* Youtube Icon */}
            <a href="#" className="text-[#8C8375] hover:text-[#FF5035] transition-colors" title="Youtube">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="#" className="text-[#8C8375] hover:text-[#FF5035] transition-colors" title="LinkedIn">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        )}
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
