import { Heart, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenAppointment: () => void;
}

export default function Footer({ onOpenAppointment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesLinks = [
    { name: "Acne Treatment", href: "#services" },
    { name: "PRP Hair Therapy", href: "#services" },
    { name: "Cosmetic Dermatology", href: "#services" },
    { name: "Chemical Peels", href: "#services" },
    { name: "STI Counseling", href: "#services" },
  ];

  const quickLinks = [
    { name: "Meet Dr. Amrita", href: "#about" },
    { name: "Clinical Process", href: "#process" },
    { name: "Conditions Treated", href: "#conditions" },
    { name: "Patient Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <footer id="footer-section" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand/About column */}
          <div className="md:col-span-4 space-y-4 text-left">
            <a href="#" className="flex items-center gap-2 group focus:outline-none">
              <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Heart className="w-5 h-5 fill-sky-400/10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base tracking-tight leading-none">
                  Dr. Amrita Shrestha
                </span>
                <span className="text-[9px] font-sans font-bold text-sky-400 tracking-wider uppercase mt-1 leading-none">
                  Consultant Dermatologist
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-2">
              Dr. Amrita Shrestha specializes in Dermatology and Venereology. Her patient-centered approach combines evidence-based medicine with personalized treatment plans to ensure safe, effective, and compassionate care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-2 text-left">
            <h4 className="font-display font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-4">
              Featured Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Newsletter/CTA */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-display font-bold text-white text-xs sm:text-sm tracking-wider uppercase mb-1">
              Contact Desk
            </h4>
            
            <div className="text-xs sm:text-sm space-y-1.5 text-slate-400">
              <p>📍 New Baneshwor, Kathmandu, Nepal</p>
              <p>📞 <a href="tel:+9779851213380" className="hover:text-white transition-colors">+977 9851213380</a></p>
              <p>✉️ <a href="mailto:info@dramritashrestha.com.np" className="hover:text-white transition-colors">info@dramritashrestha.com.np</a></p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl transition-all shadow shadow-sky-600/10 active:scale-95"
              >
                Request Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Clinical Disclaimer Block - Crucial for medical credibility & search indexing */}
        <div className="pt-6 pb-6 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed text-left space-y-2">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website, including clinical services descriptions, condition guidelines, and frequently asked questions, is strictly for educational and informational purposes. It does NOT constitute formal medical advice, professional diagnosis, prognosis, or specific treatment recommendations.
          </p>
          <p>
            Always consult a licensed Consultant Dermatologist or qualified healthcare provider directly regarding your specific symptoms or any skin, hair, or nail condition. Never delay seeking professional medical counsel because of content you read on the internet.
          </p>
        </div>

        {/* Lower footer: Copyright, Privacy Policy and Back to Top button */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <span>© {new Date().getFullYear()} Dr. Amrita Shrestha. All Rights Reserved.</span>
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-800 hover:bg-sky-600 hover:text-white rounded-full transition-all group"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
