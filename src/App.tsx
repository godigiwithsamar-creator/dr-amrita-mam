import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Phone, MessageSquare } from "lucide-react";

// Component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Conditions from "./components/Conditions";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Trigger modal with pre-filled service name
  const handleOpenAppointment = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div id="app-root-container" className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-teal-100 selection:text-teal-900">
      
      {/* Premium Navigation Header */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Hero Section */}
      <Hero onOpenAppointment={() => handleOpenAppointment()} />

      {/* Meet Dr. Amrita Section */}
      <About />

      {/* Services and Treatments Section */}
      <Services onOpenAppointment={handleOpenAppointment} />

      {/* Clinical Timeline Process Section */}
      <Process />

      {/* Why Choose Dr. Amrita Grid */}
      <WhyChoose />

      {/* Conditions Treated Grid */}
      <Conditions />

      {/* Patient Testimonials Section */}
      <Testimonials />

      {/* Accordion FAQs Section */}
      <Faqs />

      {/* Interactive Contact and CTA Section */}
      <Contact onOpenAppointment={handleOpenAppointment} />

      {/* Footer & Legal Disclaimers */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Global Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseAppointment}
        preselectedService={selectedService}
      />

      {/* Floating Action Buttons Panel (Bottom-Right) */}
      <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        {/* Floating Call / WhatsApp Button */}
        <motion.a
          id="floating-whatsapp-btn"
          href="https://wa.me/9779851213380"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white/10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-500 ease-out whitespace-nowrap">
            WhatsApp Dr. Amrita
          </span>
        </motion.a>

        {/* Floating Direct Call Button */}
        <motion.a
          id="floating-phone-btn"
          href="tel:+9779851213380"
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="group flex items-center gap-2 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-300"
          title="Call Now"
        >
          <Phone className="w-5 h-5 fill-white/10" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-500 ease-out whitespace-nowrap">
            Call +977 9851213380
          </span>
        </motion.a>

        {/* Floating Appointment Booking Button */}
        <motion.button
          id="floating-appointment-btn"
          onClick={() => handleOpenAppointment()}
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="group flex items-center gap-2.5 px-5 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/45 transition-all duration-300 focus:outline-none"
          title="Book Appointment"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-sans font-extrabold text-xs uppercase tracking-wider">
            Book Appointment
          </span>
        </motion.button>

      </div>

    </div>
  );
}
