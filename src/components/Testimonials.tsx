import { motion } from "motion/react";
import { testimonials } from "../data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Patient Experiences</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Read stories of recovery and clinical transformation from individuals who have undergone dermatological care and aesthetic therapies with Dr. Amrita Shrestha.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div id="testimonials-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md flex flex-col justify-between relative group transition-all duration-300"
            >
              <div className="space-y-4 relative text-left">
                {/* Quote Icon Background */}
                <div className="absolute top-0 right-0 text-slate-100 group-hover:text-sky-50 transition-colors duration-300">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star 
                      key={sIdx} 
                      className="w-4 h-4 text-amber-400 fill-amber-400" 
                    />
                  ))}
                </div>

                {/* Quote content */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic pt-2">
                  "{t.text}"
                </p>
              </div>

              {/* Bio & Details */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="text-left">
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                    Patient • {t.date}
                  </p>
                </div>
                {/* Treatment Tag */}
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-wider">
                  {t.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
