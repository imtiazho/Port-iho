import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ isOpen, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const availableSlots = [
    { time: '10:00 AM', day: 'Today (Aug 15)' },
    { time: '02:30 PM', day: 'Today (Aug 15)' },
    { time: '04:00 PM', day: 'Today (Aug 15)' },
    { time: '11:00 AM', day: 'Tomorrow (Aug 16)' },
    { time: '03:00 PM', day: 'Tomorrow (Aug 16)' },
  ];

  const handleConfirmBooking = () => {
    if (!selectedSlot) return;
    setBooked(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl bg-[#090909] border border-[rgba(214,200,176,0.25)] rounded-xl p-6 sm:p-8 text-[#D6C8B0] shadow-[0_0_50px_rgba(255,80,53,0.2)] overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[rgba(214,200,176,0.2)] flex items-center justify-center text-[#D6C8B0] hover:border-[#FF5035] hover:text-[#FF5035] transition-colors"
          >
            ✕
          </button>

          {booked ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#FF5035]/20 border border-[#FF5035] flex items-center justify-center text-[#FF5035] text-2xl mx-auto font-bold">
                ✓
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Call Scheduled!</h3>
              <p className="text-sm text-[#8C8375]">
                Your 15-minute introductory video call has been booked for <span className="text-[#FF5035] font-bold">{selectedSlot?.day} at {selectedSlot?.time}</span>. A calendar invitation has been generated.
              </p>
              <button
                onClick={() => { setBooked(false); setSelectedSlot(null); onClose(); }}
                className="mt-4 px-6 py-2 text-xs font-mono font-bold text-black bg-[#FF5035] rounded-full uppercase tracking-wider hover:bg-white transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#FF5035] uppercase tracking-widest block font-bold">
                  ● DIRECT BOOKING (CALENDLY / CAL.COM)
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Schedule a 15-Min Intro Call
                </h3>
                <p className="text-xs sm:text-sm text-[#8C8375]">
                  Select an available time slot below to discuss project scope, architecture, or design direction.
                </p>
              </div>

              {/* Time Slot Picker */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#D6C8B0] uppercase block">
                  Select Available Time Slot:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-lg border text-left font-mono transition-all flex flex-col justify-between ${
                        selectedSlot === slot
                          ? 'border-[#FF5035] bg-[#FF5035]/10 text-white shadow-md'
                          : 'border-[rgba(214,200,176,0.15)] bg-[#0B0B0B] text-[#8C8375] hover:text-white hover:border-white/30'
                      }`}
                    >
                      <span className="text-xs text-[#8C8375]">{slot.day}</span>
                      <span className="text-sm font-bold text-[#D6C8B0] mt-1">{slot.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Confirm Booking CTA */}
              <button
                disabled={!selectedSlot}
                onClick={handleConfirmBooking}
                className={`w-full py-3.5 text-xs font-bold font-mono tracking-[0.2em] rounded uppercase transition-all shadow-lg ${
                  selectedSlot
                    ? 'text-black bg-[#FF5035] hover:bg-white cursor-pointer'
                    : 'text-[#8C8375] bg-[#111111] border border-[rgba(214,200,176,0.1)] cursor-not-allowed'
                }`}
              >
                {selectedSlot ? `CONFIRM BOOKING FOR ${selectedSlot.time}` : 'SELECT A TIME SLOT ABOVE'}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
