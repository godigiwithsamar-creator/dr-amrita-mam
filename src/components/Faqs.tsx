import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Find immediate answers to common concerns regarding clinical skincare, appointment booking, and dermatological procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div id="faq-accordion-container" className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${idx + 1}`}
                className={`border rounded-[16px] transition-all duration-300 ${
                  isOpen 
                    ? "border-sky-200 bg-sky-50/20 shadow-sm" 
                    : "border-slate-100 bg-white hover:border-slate-200"
                }`}
              >
                {/* Header/Trigger */}
                <button
                  id={`faq-trigger-${idx + 1}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-slate-800 hover:text-sky-700 focus:outline-none transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-sky-600' : 'text-slate-400'}`} />
                    <span className="text-sm sm:text-base font-bold">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`p-1 rounded-full ${isOpen ? 'bg-sky-100 text-sky-800' : 'text-slate-400'}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx + 1}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/50 text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional guidance block */}
        <div className="mt-12 text-center p-6 bg-slate-50 border border-slate-100 rounded-[24px]">
          <p className="text-slate-600 text-sm">
            Have a question not listed here? Our clinical reception is happy to assist you directly.
          </p>
          <a
            id="faq-contact-link"
            href="tel:+9779851213380"
            className="inline-block mt-3 px-5 py-2 bg-white text-sky-600 border border-slate-200 text-xs font-bold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            Call Support Now
          </a>
        </div>

      </div>
    </section>
  );
}
