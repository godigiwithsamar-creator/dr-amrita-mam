import { motion } from "motion/react";
import { conditionsTreated } from "../data";
import { Shield, Sparkles } from "lucide-react";

export default function Conditions() {
  return (
    <section id="conditions" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Clinical Specialties</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Skin, Hair & Nail Conditions Treated
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Expert medical intervention and therapeutic protocols for a broad spectrum of dermatological and venereological concerns.
          </p>
        </div>

        {/* Conditions Grid */}
        <div 
          id="conditions-pills-grid" 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {conditionsTreated.map((condition, idx) => (
            <motion.div
              key={condition}
              id={`condition-item-${idx + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group flex items-center gap-3 px-5 py-4 bg-slate-50 hover:bg-sky-50/50 rounded-[16px] border border-slate-100 hover:border-sky-100 shadow-sm transition-all duration-300"
            >
              {/* Little bullet/indicator */}
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500 group-hover:bg-sky-600 group-hover:scale-110 transition-all shrink-0" />
              
              <span className="font-display font-bold text-slate-700 text-sm sm:text-base group-hover:text-sky-900 transition-colors">
                {condition}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Prompt guidance below grid */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-bold flex items-center justify-center gap-1.5 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-sky-500" />
            Confidential consultation for all dermatological & venereological conditions
          </p>
        </div>

      </div>
    </section>
  );
}
