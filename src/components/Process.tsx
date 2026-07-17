import { motion } from "motion/react";
import { processSteps } from "../data";
import { UserCheck, Eye, Activity, FileSpreadsheet } from "lucide-react";

export default function Process() {
  // Step icons list to map
  const stepIcons = [UserCheck, Eye, Activity, FileSpreadsheet];

  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background soft grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Step-By-Step Care</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Our Treatment Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From the moment you enter our clinic, your skin health is guided by a systematic, four-step medical process built on accuracy, examination, and safe clinical practices.
          </p>
        </div>

        {/* Timeline Path Grid */}
        <div className="relative mt-12">
          
          <div id="process-timeline-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <motion.div
                  key={step.step}
                  id={`process-step-${idx + 1}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-start text-left bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-sky-100 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-sky-50 rounded-bl-full opacity-40 pointer-events-none"></div>

                  {/* Circle Header containing Icon and Number badge */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-600 flex items-center justify-center text-white relative z-10 transition-transform hover:scale-105 duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold z-20 shadow">
                      {step.step}
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm lg:max-w-none">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
