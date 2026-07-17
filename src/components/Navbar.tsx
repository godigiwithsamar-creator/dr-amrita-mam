import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar, Phone, Heart } from "lucide-react";

interface NavbarProps {
  onOpenAppointment: () => void;
}

export default function Navbar({ onOpenAppointment }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Meet Dr. Amrita", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Our Process", href: "#process" },
    { name: "Conditions", href: "#conditions" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "glass-nav shadow-sm py-3 border-b border-slate-100" 
            : "bg-white/95 md:bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between font-sans">
            {/* Logo/Brand */}
            <a id="nav-brand-logo" href="#" className="flex items-center gap-2 group focus:outline-none">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                AS
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-slate-900 tracking-tight leading-tight text-lg group-hover:text-sky-600 transition-colors">
                  Dr. Amrita Shrestha
                </span>
                <span className="text-[10px] font-sans font-bold text-sky-600 tracking-wider uppercase leading-none mt-0.5">
                  Consultant Dermatologist
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.replace("#", "")}`}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-500 hover:text-sky-600 rounded-lg hover:bg-slate-50 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                id="header-portal-btn"
                onClick={onOpenAppointment}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
              >
                Patient Portal
              </button>
              <button
                id="header-booking-btn"
                onClick={onOpenAppointment}
                className="flex items-center gap-1.5 px-4.5 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-full shadow-md hover:shadow-lg hover:shadow-sky-600/20 active:scale-95 transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                id="header-mobile-book-icon"
                onClick={onOpenAppointment}
                className="p-2 text-sky-600 hover:bg-sky-50 rounded-full border border-sky-100 md:hidden"
                title="Book Appointment"
              >
                <Calendar className="w-5 h-5" />
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-600 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Out Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    id={`mobile-nav-link-${link.href.replace("#", "")}`}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 px-4">
                  <a
                    id="mobile-nav-call-btn"
                    href="tel:+9779851213380"
                    className="flex items-center justify-center gap-2 w-full py-3 text-base font-semibold text-slate-700 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-sky-600" />
                    <span>Call Now: +977 9851213380</span>
                  </a>
                  <button
                    id="mobile-nav-book-btn"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenAppointment();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Spacer to prevent content jump under absolute nav */}
      <div className="h-16 md:h-20" />
    </>
  );
}
