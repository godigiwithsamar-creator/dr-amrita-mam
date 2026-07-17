import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { Calendar, Check } from "lucide-react";

interface ServicesProps {
  onOpenAppointment: (preselectedService?: string) => void;
}

type CategoryType = "All" | "General" | "Hair & Nail" | "Cosmetic" | "Specialized";

export default function Services({ onOpenAppointment }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const categories: { label: string; value: CategoryType }[] = [
    { label: "All Services", value: "All" },
    { label: "General Dermatology", value: "General" },
    { label: "Hair & Nails", value: "Hair & Nail" },
    { label: "Cosmetic Procedures", value: "Cosmetic" },
    { label: "Specialized Care", value: "Specialized" }
  ];

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Comprehensive Treatments</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Professional Dermatology Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Providing expert evidence-based treatments for an extensive array of skin, hair, nail, and venereology conditions. Use the tabs below to explore our care categories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`service-cat-${cat.value.toLowerCase().replace(" & ", "-")}`}
              onClick={() => setActiveCategory(cat.value)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 focus:outline-none ${
                activeCategory === cat.value
                  ? "text-white bg-sky-600 shadow-md shadow-sky-600/10"
                  : "text-slate-600 bg-white hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid with AnimatePresence for filter transitions */}
        <motion.div
          layout
          id="services-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-[24px] p-6 sm:p-8 border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300"
                >
                  <div className="space-y-4 text-left">
                    {/* Icon frame */}
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100/50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Category tag */}
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {service.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Actions inside card */}
                  <div className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <button
                      onClick={() => onOpenAppointment(service.title)}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 focus:outline-none"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Treatment</span>
                    </button>
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Checked Safe
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer recommendation callout - Bento Style */}
        <div className="mt-16 text-center bg-white border border-slate-100 rounded-[24px] p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
          <p className="text-slate-600 text-sm leading-relaxed">
            💡 <strong>Not sure which treatment is right for you?</strong> Schedule a general dermatological consultation. Dr. Amrita Shrestha will analyze your skin type and condition, then construct a personalized clinical protocol.
          </p>
          <button
            id="services-consultation-btn"
            onClick={() => onOpenAppointment("General Consultation")}
            className="mt-4 px-6 py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold rounded-full border border-sky-100 transition-all active:scale-95"
          >
            Schedule General Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
