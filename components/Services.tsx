import { Truck, Wrench, ShieldAlert, Map } from 'lucide-react';

const services = [
  {
    title: 'Emergency Towing',
    description: '24/7 rapid response for breakdowns. We get you off the road and to safety fast.',
    icon: Truck,
  },
  {
    title: 'Roadside Assistance',
    description: 'Lockouts, jump starts, and tire changes. Professional help when you need it most.',
    icon: Wrench,
  },
  {
    title: 'Specialized Recovery',
    description: 'Professional winch-outs and accident clearing. Expert handling for complex situations.',
    icon: ShieldAlert,
  },
  {
    title: 'Long-Distance Transport',
    description: 'Scheduled hauling across South Florida. Reliable transport for your vehicle over any distance.',
    icon: Map,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-espresso-pro mb-4 tracking-tight">Tri-County Service Divisions</h2>
          <p className="text-lg text-espresso-pro/70 font-medium">
            Professional towing and recovery solutions tailored for South Florida drivers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-road-mist p-8 rounded-3xl border-2 border-transparent hover:border-espresso-pro transition-all active:scale-95 cursor-default group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-sky-rescue group-hover:text-white transition-colors text-sky-rescue">
                  <Icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-espresso-pro mb-3 tracking-tight">{service.title}</h3>
                <p className="text-espresso-pro/70 font-medium leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
