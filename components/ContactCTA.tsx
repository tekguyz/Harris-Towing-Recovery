import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-espresso-pro rounded-[3rem] p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Don&apos;t stay stranded. <br />
              <span className="text-sky-rescue">Call dispatch now.</span>
            </h2>
            <p className="text-lg text-gray-300 font-medium mb-8">
              Our fleet is stationed throughout Broward, Palm Beach, and Miami-Dade counties for rapid response times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 text-white font-bold">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Clock size={24} className="text-sky-rescue" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Availability</div>
                  <div>24 Hours / 7 Days</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-xl">
                  <MapPin size={24} className="text-sky-rescue" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Service Area</div>
                  <div>South Florida</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <a 
              href="tel:+18005550199" 
              className="flex flex-col items-center justify-center gap-2 bg-sky-rescue hover:bg-sky-rescue/90 text-white px-10 py-6 rounded-3xl font-black transition-all hover:scale-105 shadow-xl w-full"
            >
              <Phone size={32} className="animate-bounce" />
              <span className="text-2xl">1-800-555-0199</span>
              <span className="text-sm font-bold text-white/80 uppercase tracking-wider">Tap to Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
