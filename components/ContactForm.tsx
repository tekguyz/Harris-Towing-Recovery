'use client';

import { useState, useRef } from 'react';
import { Send, Upload, CheckCircle2, Loader2, Truck, Trash2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest" 
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(`${e.target.files.length} file(s) selected`);
    } else {
      setFileName('');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center flex flex-col items-center justify-center min-h-[500px]">
        <div className="bg-green-100 p-4 rounded-full text-green-600 mb-6">
          <CheckCircle2 size={64} />
        </div>
        <h3 className="text-3xl font-black text-espresso-pro mb-4">Received.</h3>
        <p className="text-lg text-espresso-pro/70 font-medium max-w-md">
          A dispatcher will reach out shortly to confirm your request.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-sky-rescue font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-black text-espresso-pro mb-6 tracking-tight leading-tight">
              Request Service <br />
              <span className="text-sky-rescue">& Get a Quote.</span>
            </h2>
            <p className="text-lg text-espresso-pro/70 font-medium mb-10 leading-relaxed">
              Need a scheduled transport or have a junk car to remove? Fill out the form and our team will provide an accurate quote within minutes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-road-mist rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-xl text-sky-rescue shadow-sm">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-espresso-pro">Scheduled Transport</h4>
                  <p className="text-sm font-bold text-espresso-pro/80">Reliable hauling across South Florida.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-road-mist rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-xl text-sky-rescue shadow-sm">
                  <Trash2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-espresso-pro">Junk Car Removal</h4>
                  <p className="text-sm font-bold text-espresso-pro/80">Top dollar paid for your unwanted vehicles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <form 
                name="harris-contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="harris-contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-black text-espresso-pro uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-xl bg-road-mist border border-gray-200 focus:border-sky-rescue focus:ring-2 focus:ring-sky-rescue/20 outline-none transition-all font-bold text-espresso-pro placeholder:text-espresso-pro/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-black text-espresso-pro uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="(954) 000-0000"
                      className="w-full px-5 py-4 rounded-xl bg-road-mist border border-gray-200 focus:border-sky-rescue focus:ring-2 focus:ring-sky-rescue/20 outline-none transition-all font-bold text-espresso-pro placeholder:text-espresso-pro/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service_type" className="text-sm font-black text-espresso-pro uppercase tracking-wider">Service Type</label>
                  <select 
                    id="service_type" 
                    name="service_type" 
                    required
                    className="w-full px-5 py-4 rounded-xl bg-road-mist border border-gray-200 focus:border-sky-rescue focus:ring-2 focus:ring-sky-rescue/20 outline-none transition-all font-bold text-espresso-pro appearance-none cursor-pointer"
                  >
                    <option value="transport">Scheduled Transport</option>
                    <option value="junk">Junk Car Removal</option>
                    <option value="emergency">Emergency Towing</option>
                    <option value="roadside">Roadside Assistance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-black text-espresso-pro uppercase tracking-wider">Details (Vehicle Make/Model, Location)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                    placeholder="Tell us about your vehicle and where it's located..."
                    className="w-full px-5 py-4 rounded-xl bg-road-mist border border-gray-200 focus:border-sky-rescue focus:ring-2 focus:ring-sky-rescue/20 outline-none transition-all font-bold text-espresso-pro resize-none placeholder:text-espresso-pro/40"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black text-espresso-pro uppercase tracking-wider">Vehicle Condition Photos</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-5 py-6 rounded-xl bg-road-mist border-2 border-dashed border-gray-300 hover:border-sky-rescue transition-all cursor-pointer flex flex-col items-center justify-center gap-2 group"
                  >
                    <Upload size={24} className="text-espresso-pro/40 group-hover:text-sky-rescue transition-colors" />
                    <span className="text-sm font-bold text-espresso-pro/80 group-hover:text-espresso-pro transition-colors">
                      {fileName || "Click to upload photos (Required for Junk Car quotes)"}
                    </span>
                    <input 
                      type="file" 
                      name="photos" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple 
                      className="hidden" 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-sky-rescue hover:bg-sky-rescue/90 disabled:bg-sky-rescue/50 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Send Request
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <p className="text-center text-red-500 font-bold text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
