import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-road-mist py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-espresso-pro p-2 rounded-lg text-white">
            <Truck size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-espresso-pro leading-none tracking-tight uppercase">Harris</span>
            <span className="text-xs font-bold text-sky-rescue leading-none tracking-widest uppercase">Towing & Recovery</span>
          </div>
        </div>
        
        <div className="text-center md:text-right text-sm font-bold text-espresso-pro/80">
          <p>&copy; {new Date().getFullYear()} Harris Towing & Recovery. All rights reserved.</p>
          <p className="mt-1">Licensed &amp; Insured in the State of Florida.</p>
        </div>
      </div>
    </footer>
  );
}
