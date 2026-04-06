import { Star, PhoneCall, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-road-mist pt-[120px] pb-20 md:pt-[160px] md:pb-32 overflow-hidden mt-[-100px]">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-rescue/20 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Social Proof Overlay */}
        <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-base font-bold mb-8 shadow-sm border border-gray-100">
          <Star size={20} className="text-yellow-500 fill-yellow-500" />
          <span className="text-espresso-pro">4.8 Rating (70+ Google Reviews)</span>
        </div>
        
        {/* H1 */}
        <h1 className="text-5xl md:text-7xl font-black text-espresso-pro tracking-tight mb-8 max-w-5xl leading-[1.1]">
          Professional Towing & Recovery. <br className="hidden md:block" />
          <span className="text-sky-rescue">Anytime. Anywhere.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-espresso-pro/70 mb-12 max-w-2xl font-medium">
          Whether you&apos;ve been in an accident, have a flat tire, or need a heavy-duty tow, Harris Towing &amp; Recovery is available 24/7 across South Florida.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <a 
            href="tel:9542496753" 
            className="flex items-center justify-center gap-3 bg-sky-rescue hover:bg-sky-rescue/90 text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
          >
            <PhoneCall size={24} className="animate-pulse" />
            TAP TO CALL: 954-249-6753
          </a>
          
          <a 
            href="#services" 
            className="flex items-center justify-center gap-2 text-espresso-pro hover:text-sky-rescue px-8 py-5 rounded-full font-bold text-lg transition-colors w-full sm:w-auto"
          >
            Request Service
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
