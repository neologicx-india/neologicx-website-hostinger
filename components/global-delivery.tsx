import React from 'react';
import { Globe2, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function GlobalDelivery() {
  return (
    <section className="w-full py-24 bg-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">Working with teams beyond our time zone</h2>
            <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              A good offshore relationship depends on visibility, not proximity. We structure projects around 
              agreed milestones, documented decisions, shared project communication and planned overlap for 
              the conversations that matter. Engagements can be shaped around a defined scope, an ongoing 
              product team or time-and-materials delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">Delivering across UK, Singapore and beyond.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Planned Overlap</h4>
                  <p className="text-sm text-muted-foreground">Strategic syncs for the conversations that matter.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Clear Visibility</h4>
                  <p className="text-sm text-muted-foreground">Documented decisions and transparent progress.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Delivery Base</h4>
                  <p className="text-sm text-muted-foreground">Anchored in Bikaner, Rajasthan, India.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full h-[350px] lg:h-[450px] bg-background border border-border rounded-2xl p-8 flex items-center justify-center shadow-lg shadow-primary/5 overflow-hidden">
             {/* Abstract world/network graphic */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background"></div>
             
             <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* A placeholder for an actual map/illustration. Since I can't generate a good SVG map easily in line, I'll use a stylized icon presentation. */}
                <div className="relative w-64 h-64 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="absolute w-48 h-48 rounded-full border border-primary/30 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="w-3 h-3 bg-primary rounded-full absolute -top-1.5 shadow-[0_0_10px_currentColor]"></div>
                  </div>
                  <div className="absolute w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                    <div className="w-2.5 h-2.5 bg-sky-400 rounded-full absolute -right-1 shadow-[0_0_10px_currentColor]"></div>
                  </div>
                  <Globe2 className="w-16 h-16 text-primary opacity-80" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
