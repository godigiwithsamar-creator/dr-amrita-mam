import { motion } from "motion/react";
import { chooseReasons } from "../data";

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative side shapes */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Clinical Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Why Choose Dr. Amrita Shrestha?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Providing trusted, top-tier dermatological diagnostics, therapeutic regimes, and aesthetic care focused on medical safety and professional ethics.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div id="why-choose-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chooseReasons.map((reason, idx) => {
            const Icon = reason.icon;
            // Alternate colors for a bento feel
            const isEven = idx % 2 === 0;
            const iconBg = isEven ? "bg-sky-50 text-sky-600" : "bg-emerald-50 text-emerald-600";
            const hoverBg = isEven ? "group-hover:bg-sky-600" : "group-hover:bg-emerald-600";
            
            return (
              <motion.div
                key={reason.id}
                id={`why-choose-card-${reason.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group bg-slate-50/50 rounded-[24px] p-6 sm:p-7 border border-slate-100 hover:border-sky-100 hover:bg-white shadow-sm hover:shadow-md flex flex-col items-start gap-4 transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center ${hoverBg} group-hover:text-white transition-all duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text block */}
                <div className="space-y-2 text-left">
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 tracking-tight leading-tight group-hover:text-sky-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Statement banner - Bento Style */}
        <div className="mt-16 bg-slate-50 border border-slate-100 rounded-[24px] p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between shadow-sm">
          <div className="space-y-2 max-w-2xl text-left">
            <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg">
              Our Patient Safety Commitment
            </h4>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Dr. Amrita Shrestha strictly adheres to global health regulatory guidelines and uses high-grade sterile apparatus for all procedures. We guarantee complete clinical transparency, with zero hidden medication fees or unneeded diagnostic recommendations.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-sky-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">✓</span>
              <span className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">★</span>
              <span className="w-8 h-8 rounded-full bg-sky-400 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">♥</span>
            </div>
            <span className="text-xs font-bold text-slate-600">Accredited Clinical Care</span>
          </div>
        </div>

      </div>
    </section>
  );
}
