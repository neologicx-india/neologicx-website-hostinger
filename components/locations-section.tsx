import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const locations = [
  {
    city: "Rajasthan",
    address: "T-11128, Rangoli Garden, Near Vaishali Nagar, Maharana Pratap Road, Jaipur - 302034",
    phone: "+91-9414138694/620"
  },
  {
    city: "Mumbai",
    address: "4th floor Plot A-59 Road Number 1 MIDC Marol Industrial Area Andheri East Mumbai 400093",
    phone: "+91-7014156602"
  },
  {
    city: "Gujrat",
    address: "1107, STC(Shivam Trade Centre), NH147, Ambli, Ahmedabad 380058",
    phone: "+91-9099960099"
  },
  {
    city: "Gurgaon",
    address: "Building No, 1970, 2nd floor, Block A, Greenwood City, Sector 45, Gurugram, Haryana 122003",
    phone: "+91-9414138694"
  },
  {
    city: "Singapore",
    address: "177 TANJONG RHU ROAD, #07-13, SINGAPORE-436607",
    phone: "+65 91294058"
  }
];

export default function LocationsSection() {
  return (
    <section className="w-full bg-muted/10 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1A3A] tracking-tight mb-3">Our Locations</h2>
          <p className="text-muted-foreground text-[15px]">Find us across key cities to serve you better.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {locations.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-border/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-5 shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1A3A] mb-3">{loc.city}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-6 flex-grow">{loc.address}</p>
              {/* <div className="flex items-center gap-2 text-[13px] font-semibold text-[#0B1A3A] mt-auto pt-4 border-t border-border/30">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{loc.phone}</span>
              </div> */}
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <p className="text-sm text-muted-foreground italic">* Representative Office</p>
        </div>
      </div>

      {/* Glowing Faded Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px] z-20" />
    </section>
  );
}
