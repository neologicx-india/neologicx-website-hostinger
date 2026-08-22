import type { FC } from "react";
import { MapPin, Building2, Globe2 } from "lucide-react";

interface Location {
  city: string;
  address: string;
  isHQ?: boolean;
}

const indiaLocations: Location[] = [
  {
    city: "Bikaner",
    address:
      "1st Floor, Ishwar Maya, Old Ginani, Bikaner Fort, Bikaner, Rajasthan - 334001",
    isHQ: true,
  },
  {
    city: "Jaipur",
    address:
      "T-11128, Rangoli Garden, Near Vaishali Nagar, Maharana Pratap Road, Jaipur - 302034",
  },
  {
    city: "Mumbai",
    address:
      "4th floor Plot A-59 Road Number 1 MIDC Marol Industrial Area Andheri East Mumbai - 400093",
  },
  {
    city: "Gujarat",
    address: "1107, STC(Shivam Trade Centre), NH147, Ambli, Ahmedabad - 380058",
  },
  {
    city: "Gurgaon",
    address:
      "Building No, 1970, 2nd floor, Block A, Greenwood City, Sector 45, Gurugram, Haryana - 122003",
  },
];

const internationalLocations: Location[] = [
  {
    city: "Singapore",
    address: "177 TANJONG RHU ROAD, #07-13, SINGAPORE - 436607",
  },
  {
    city: "Dubai",
    address: "Office 302, Business Bay Tower, Dubai, UAE – 00000",
  },
  {
    city: "Malaysia",
    address:
      "MTECHNIX SDN. BHD. (1411006-H), 3B-10-7, Plaza Sentral, Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur, Malaysia",
  },
];

const GlobalLocations: FC = () => {
  return (
    <section className="w-full bg-muted/10 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Our Global Presence
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Spanning across major cities in India and key international hubs, we
            are positioned to serve our global clientele with local expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* India Locations (Col-8) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 flex-wrap">
              <div className="p-2.5 bg-blue-50 rounded-xl text-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                National (India)
              </h3>
              <span className="ml-auto bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold">
                HQ & Representative Offices
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {indiaLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-md ${loc.isHQ
                    ? "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200"
                    : "bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200"
                    }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      {loc.city}
                      {loc.isHQ && (
                        <span className="inline-flex items-center gap-1 bg-amber-500 text-white px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                          HQ
                        </span>
                      )}
                    </h4>
                    <MapPin
                      className={`w-5 h-5 ${loc.isHQ
                        ? "text-amber-500"
                        : "text-slate-400 group-hover:text-blue-500 transition-colors"
                        }`}
                    />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* International Locations (Col-4) */}
          <div className="lg:col-span-4 bg-slate-900 rounded-3xl p-8 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-700">
              <div className="p-2.5 bg-slate-800 rounded-xl text-indigo-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">International</h3>
            </div>

            <div className="space-y-6">
              {internationalLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                      {loc.city}
                    </h4>
                    <MapPin className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-sm text-slate-400 italic">
                * Expanding our reach to serve clients globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocations;
