'use client';

import { Phone } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-sky-rescue text-espresso-pro shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:9542496753" 
        className="flex items-center justify-between px-6 py-5 active:bg-sky-rescue/90 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="bg-espresso-pro/10 p-2 rounded-full">
            <Phone size={24} strokeWidth={2.5} />
          </div>
          <span className="text-lg font-black tracking-tight uppercase">Tap to Call Dispatch</span>
        </div>
        <span className="text-xl font-black tracking-tighter">954-249-6753</span>
      </a>
    </div>
  );
}
