import { motion } from "motion/react";
import { Calendar, Phone, Sparkles, ShieldCheck, Heart } from "lucide-react";
import doctorImg from "../assets/images/dr_amrita_shrestha_1784274249860.jpg";

interface HeroProps {
  onOpenAppointment: () => void;
}

export default function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section id="hero-section" className="relative bg-slate-50 overflow-hidden pt-6 pb-16 md:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-gradient-to-bl from-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[35%] h-[35%] bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Text Content - Bento Card Style */}
          <div className="lg:col-span-8 bg-white rounded-[24px] p-8 md:p-12 flex flex-col justify-center border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full opacity-50 pointer-events-none"></div>
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/10" />
              <span>Consultant Dermatologist</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-slate-900 tracking-tight leading-[1.1] mb-6"
            >
              Healthy Skin Starts <br className="hidden sm:block" />
              With <span className="text-sky-600 relative inline-block">Expert Care</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed mb-8 italic"
            >
              Personalized diagnosis for skin, hair, and nail health by an experienced specialist dedicated to safe, compassionate dermatology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-book-btn"
                onClick={onOpenAppointment}
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-2xl shadow-lg shadow-sky-200 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
              
              <a
                id="hero-call-btn"
                href="tel:+9779851213380"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-white animate-pulse" />
                <span>Call Now: +977 9851213380</span>
              </a>
            </motion.div>

            {/* Micro Trust Factors */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4"
            >
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-emerald-600">100%</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Confidential STI Care</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-sky-600">Active</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Evidence-Based Care</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-emerald-600">Premium</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Diagnostic Equipment</span>
              </div>
            </motion.div>

          </div>

          {/* Right Image Content - Bento Doctor Profile */}
          <div className="lg:col-span-4 bg-sky-100 rounded-[24px] overflow-hidden relative border border-sky-200 flex flex-col justify-end min-h-[420px] lg:min-h-full">
            
            {/* Geometric Doctor Representation container / Frame */}
            <div className="absolute inset-0 flex items-end justify-center">
              <div className="w-full h-full bg-gradient-to-t from-sky-200/90 via-transparent to-transparent absolute bottom-0 z-10"></div>
              
              <div className="w-full h-full relative">
                <img
                  src={doctorImg}
                  alt="Dr. Amrita Shrestha - Consultant Dermatologist"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Doctor Card Label */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 z-20 shadow-sm">
              <p className="text-xs font-bold text-sky-800 uppercase mb-1">Dr. Amrita Shrestha</p>
              <p className="text-[10px] font-semibold text-slate-600">Specialization: Dermatology and Venereology</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
