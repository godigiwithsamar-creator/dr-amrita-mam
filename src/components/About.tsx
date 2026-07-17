import { motion } from "motion/react";
import { Award, ShieldCheck, HeartHandshake, BookOpen } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Specialist Consultant",
      desc: "Years of focused hospital and clinic experience in complex skin diagnoses."
    },
    {
      icon: ShieldCheck,
      title: "Evidence-Based Medicine",
      desc: "All diagnostic and treatment regimes are backed by rigorous medical studies."
    },
    {
      icon: HeartHandshake,
      title: "Confidential Treatment",
      desc: "Providing safe and private counseling for STIs with complete patient discretion."
    },
    {
      icon: BookOpen,
      title: "Ongoing Clinical Research",
      desc: "Constantly integrating the latest developments in global cosmetology and skincare."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Visual Banner & Quote Card - Bento Dark Style */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[24px] bg-slate-900 p-8 sm:p-10 text-white overflow-hidden shadow-sm flex-1 flex flex-col justify-center border border-slate-800"
            >
              {/* Decorative light circle */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-4xl sm:text-5xl font-display font-black text-sky-500/30 block leading-none mb-4">“</span>
              
              <blockquote className="text-base sm:text-lg font-display font-medium leading-relaxed mb-6 text-slate-300">
                Dr. Amrita Shrestha believes healthy skin is not just about aesthetics—it is a vital component of confidence, happiness, and overall mental and physical well-being.
              </blockquote>
              
              <div className="border-t border-white/10 pt-6 mt-auto">
                <p className="font-display font-bold text-base text-white">Dr. Amrita Shrestha</p>
                <p className="text-xs text-sky-400 font-bold tracking-wide uppercase mt-0.5">Consultant Dermatologist & Venereologist</p>
              </div>
            </motion.div>

            {/* Quick stats panel */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-5 bg-sky-50/60 rounded-[24px] border border-sky-100 text-center">
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-sky-600">Dermatology</p>
                <p className="text-[10px] sm:text-xs font-bold text-sky-800 uppercase tracking-wider mt-1">Core Department</p>
              </div>
              <div className="p-5 bg-emerald-50/60 rounded-[24px] border border-emerald-100 text-center">
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-600">Venereology</p>
                <p className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider mt-1">Core Speciality</p>
              </div>
            </div>
          </div>

          {/* Right Text Content - Bento White Style */}
          <div className="lg:col-span-7 bg-slate-50/50 rounded-[24px] p-8 md:p-10 border border-slate-100 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-left"
            >
              <div className="space-y-2">
                <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Clinical Profile</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  Meet Dr. Amrita Shrestha
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Dr. Amrita Shrestha is a highly respected <strong className="text-slate-800 font-semibold">Consultant Dermatologist</strong> specializing in the fields of Dermatology and Venereology. She provides patient-focused, comprehensive diagnosis and treatment for an expansive range of skin, hair, nail, and sexually transmitted infections (STIs).
                </p>
                <p>
                  Her patient-centered philosophy merges modern, evidence-based medicine with highly personalized treatment plans. She strongly believes that every patient deserves custom clinical attention, ensuring that all interventions are safe, scientifically robust, and completed with maximum compassion.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {highlights.map((h, idx) => {
                  const Icon = h.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-sm text-slate-800">{h.title}</h4>
                        <p className="text-xs text-slate-500 leading-normal">{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
