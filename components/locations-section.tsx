import React from 'react';
import { MapPin, Globe } from 'lucide-react';

const indiaLocations = [
  {
    city: "Bikaner",
    address: "1st Floor, Ishwar Maya, Old Ginani, Bikaner Fort, Bikaner, Rajasthan - 334001",
    active: true,
  },
  {
    city: "Jaipur",
    address: "T-11128, Rangoli Garden, Near Vaishali Nagar, Maharana Pratap Road, Jaipur - 302034",
  },
  {
    city: "Mumbai",
    address: "4th floor, Plot A-59, Road Number 1, MIDC Marol Industrial Area, Andheri East, Mumbai - 400093",
  },
  {
    city: "Gujarat",
    address: "1107, STC(Shivam Trade Centre), NH147, Ambli, Ahmedabad - 380058",
  },
  {
    city: "Gurgaon",
    address: "Building No. 1970, 2nd floor, Block A, Greenwood City, Sector 45, Gurugram, Haryana - 122003",
  }
];

const internationalLocations = [
  {
    country: "Singapore",
    address: "177 TANJONG RHU ROAD, #11-13, SINGAPORE - 436607",
    flagCode: "sg"
  },
  {
    country: "Dubai",
    address: "502, Al Nasr Plaza, Oud Metha, Dubai",
    flagCode: "ae"
  },
  {
    country: "Malaysia",
    address: "3B-10-7, Plaza Sentral, Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur, Malaysia (1411006-H)",
    flagCode: "my"
  },
  {
    country: "UK (London)",
    address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ",
    flagCode: "gb"
  },
  {
    country: "Australia (Sydney)",
    address: "Level 12, 275 George St, Sydney NSW 2000",
    flagCode: "au"
  }
];

export default function LocationsSection() {
  return (
    <section className="w-full bg-muted/10 py-20 relative overflow-hidden font-sans">
      {/* Map Background Image */}
      <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none flex justify-end items-start pt-10 pr-10">
        <img 
          src="/map.png" 
          alt="World Map" 
          className="w-full max-w-[800px] object-contain object-right-top opacity-60 md:opacity-100" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 relative">
          <div className="max-w-2xl">
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Our Locations</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1A3A] tracking-tight mb-4">
              Global Presence, Local Support
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              With offices in India and across the globe, we are always close to our clients, no matter where you are.
            </p>
          </div>
          
          {/* Cursive Handwriting Decoration */}
          <div className="hidden lg:flex flex-col items-center absolute right-0 top-0 -mt-2 mr-4 rotate-[-6deg]">
            <span className="text-primary font-medium text-3xl" style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}>Let's Build</span>
            <span className="text-primary font-medium text-3xl -mt-1 ml-6" style={{ fontFamily: "'Caveat', 'Brush Script MT', cursive" }}>Together</span>
            <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary mt-1 ml-4">
               <path d="M5 12Q50 24 95 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
               <path d="M85 2L95 6L88 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - India */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* National Header Card */} 
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 py-2 md:p-6 md:py-2 flex flex-col sm:flex-row sm:items-center justify-between border border-border shadow-sm gap-4">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border shadow-sm shrink-0">
                     <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h3 className="text-xl md:text-2xl font-extrabold text-[#0B1A3A]">National (India)</h3>
                     <p className="text-sm text-muted-foreground font-medium mt-0.5">Our offices across India</p>
                  </div>
               </div>
               <div className="w-28 h-24 shrink-0 self-end sm:self-auto ml-2">
                  <img src="/india_global_theme.svg" alt="India Map" className="w-full h-full object-contain" />
               </div>
            </div>

            {/* India Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {indiaLocations.map((loc, idx) => (
                  <div key={idx} className={`bg-background rounded-xl p-5 border shadow-sm relative flex flex-col group hover:shadow-md transition-all duration-300 ${loc.active ? 'border-primary/30 bg-primary/5' : 'border-border/60'}`}>
                     {loc.active && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-xl"></div>}
                     <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <MapPin className="w-4 h-4 text-primary" />
                           </div>
                           <h4 className="font-bold text-[#0B1A3A] text-base">{loc.city}</h4>
                        </div>
                     </div>
                     <p className="text-[13px] text-muted-foreground leading-relaxed pl-11">{loc.address}</p>
                  </div>
               ))}
            </div>
          </div>

          {/* Right Column - International */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1A3A] rounded-2xl p-6 md:p-8 h-full flex flex-col relative overflow-hidden shadow-xl">
               {/* Decorative map bg inside the card */}
               <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                  <Globe className="w-64 h-64 -mt-16 -mr-16 text-white" />
               </div>
               
               <div className="flex items-center gap-4 mb-1 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                     <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div>
                     <h3 className="text-xl md:text-2xl font-extrabold text-white">International</h3>
                     <p className="text-white/70 text-sm font-medium mt-0.5">Our global offices</p>
                  </div>
                  <div className="ml-auto w-32 h-24">
                     <img src="/global_presence_world_map.png" alt="World Map" className="w-full h-full object-contain opacity-90" />
                  </div>
               </div>

               <div className="flex flex-col gap-3 relative z-10 flex-grow justify-center">
                  {internationalLocations.map((loc, idx) => (
                     <div key={idx} className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl p-4 flex items-center gap-4 transition-all group cursor-default">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/20 shadow-sm bg-[#0B1A3A]">
                           <img src={`https://flagcdn.com/w40/${loc.flagCode}.png`} alt={`${loc.country} Flag`} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow min-w-0">
                           <h4 className="text-white font-bold text-sm mb-0.5">{loc.country}</h4>
                           <p className="text-white/60 text-[11px] md:text-xs leading-relaxed">{loc.address}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

