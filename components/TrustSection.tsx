'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  {
    text: "Best towing service in Broward! Fast, professional, and very reasonable prices. They handled my lowered car with extreme care.",
    author: "Michael R.",
    date: "2 weeks ago"
  },
  {
    text: "Harris Towing & Recovery saved me when I was stranded on I-95 at 3 AM. They arrived in 20 minutes and the driver was super helpful!",
    author: "Sarah J.",
    date: "1 month ago"
  },
  {
    text: "Professional, honest, and reliable. I've used them twice now for long-distance transport and they never disappoint.",
    author: "David L.",
    date: "3 months ago"
  }
];

export default function TrustSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-road-mist">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Proof */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#4285F4] p-3 rounded-xl text-white">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-espresso-pro leading-tight">Google Reviews</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                    <span className="ml-2 text-espresso-pro font-bold">4.8 Rating</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow relative min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Quote size={40} className="text-sky-rescue/20 mb-4" />
                    <p className="text-xl md:text-2xl font-bold text-espresso-pro leading-tight mb-6 italic">
                      &quot;{reviews[currentReview].text}&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-black text-espresso-pro">{reviews[currentReview].author}</p>
                        <p className="text-sm font-bold text-espresso-pro/70">{reviews[currentReview].date}</p>
                      </div>
                      <div className="flex gap-0.5 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-bold text-espresso-pro/80 uppercase tracking-widest">70+ Verified Reviews</span>
                <a 
                  href="https://www.google.com/search?q=Harris+Towing+%26+Recovery+South+Florida" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky-rescue font-black flex items-center gap-1 hover:underline"
                >
                  View All <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: The Map */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-sm border border-gray-100 h-full overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 mb-4 px-4 pt-4">
                <div className="bg-sky-rescue/10 p-2 rounded-lg text-sky-rescue">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-black text-espresso-pro leading-tight">Our Service Area</h3>
                  <p className="text-sm font-bold text-espresso-pro/70">Broward, Palm Beach & Miami-Dade</p>
                </div>
              </div>
              <div className="flex-grow rounded-[1.5rem] overflow-hidden border border-gray-100 relative min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28622.948948107714!2d-80.2440887256836!3d26.265927099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90585e6baaa9d%3A0xdc9a1c0df6e7c6bc!2sHarris%20Towing%20%26%20Recovery!5e0!3m2!1sen!2sus!4v1775442186268!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harris Towing & Recovery Service Area Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
