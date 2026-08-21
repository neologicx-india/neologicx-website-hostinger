import type { FC } from "react";

interface Location {
  city: string;
  address: string;
  isHQ?: boolean;
}

interface RegionGroup {
  region: string;
  locations: Location[];
}

const regions: RegionGroup[] = [
  {
    region: "India",
    locations: [
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
        address: "4th floor Plot A-59 Road Number 1 MIDC Marol Industrial Area Andheri East Mumbai - 400093",
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

    ],
  },
  {
    region: "International",
    locations: [
      {
        city: "Singapore",
        address: "177 TANJONG RHU ROAD, #07-13, SINGAPORE - 436607",
      },
      {
        city: "Dubai",
        address: "Office 302, Business Bay Tower, Dubai, UAE – 00000",
      },
    ],
  },
];

const OurLocations: FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 bg-muted/10">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
          <span className="h-px w-4 bg-primary" />
          Global Presence
          <span className="h-px w-4 bg-primary" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
          Our Locations
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-500">
          Eight offices across India and beyond, working as one team to serve
          you better.
        </p>
      </div>

      {/* Region groups */}
      {regions.map((group, idx) => (
        <div key={group.region} className={idx > 0 ? "mt-14" : ""}>
          <div className="mb-6 flex items-center gap-4">
            <span className="whitespace-nowrap text-[13px] font-bold uppercase tracking-wide text-slate-900">
              {group.region}{" "}
              <span className="font-medium normal-case tracking-normal text-slate-400">
                · {group.locations.length}{" "}
                {group.locations.length === 1 ? "office" : "offices"}
              </span>
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.locations.map((loc) => (
              <div
                key={loc.city}
                className={`rounded-2xl border border-border/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 ${loc.isHQ
                  ? "border-amber-400 bg-gradient-to-b from-amber-50/40 to-white"
                  : "border-border/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] bg-white hover:border-transparent"
                  }`}
              >
                <h3 className="mb-2 flex items-center gap-2 font-serif text-lg font-bold text-slate-900">
                  {loc.city}
                  {loc.isHQ && (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-amber-600">
                      Headquarters
                    </span>
                  )}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-slate-500">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-2 flex justify-end">
        <p className="text-sm text-muted-foreground italic">* Representative Office</p>
      </div>
    </section>
  );
};

export default OurLocations;
