import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, CheckCircle2, AlertCircle, Sparkles, Send, Phone } from "lucide-react";
import { services } from "../data";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function AppointmentModal({ isOpen, onClose, preselectedService }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: preselectedService || "General Consultation",
    date: "",
    timeSlot: "morning",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please provide a contact phone number.");
      return;
    }
    if (!formData.date) {
      setError("Please select a preferred date.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const resetModal = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "General Consultation",
      date: "",
      timeSlot: "morning",
      message: ""
    });
    setSubmitSuccess(false);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden z-10"
          >
            
            {/* Elegant Header */}
            <div className="bg-slate-900 p-6 text-white relative">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/10">
                  <Calendar className="w-5 h-5 text-sky-400" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg sm:text-xl">
                    Request Appointment
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Secure consultation with Dr. Amrita Shrestha
                  </p>
                </div>
              </div>
            </div>

            {/* Inner Content Area */}
            <div className="p-6">
              {!submitSuccess ? (
                <form id="appointment-modal-form" onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Validation Error banner */}
                  {error && (
                    <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-100 rounded-xl text-red-700 text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Patient Full Name <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone Number <span className="text-sky-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +977 9851213380"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. patient@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Required Medical Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                    >
                      <option value="General Consultation">General Dermatology Consultation</option>
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time slot Selection Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Preferred Date <span className="text-sky-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Preferred Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                      >
                        <option value="morning">Morning (9:30 AM - 12:30 PM)</option>
                        <option value="afternoon">Afternoon (1:30 PM - 4:30 PM)</option>
                        <option value="evening">Evening (5:00 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message/Notes textarea */}
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Symptoms or Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your skin, hair, or nail condition..."
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-appointment-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Booking Request</span>
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-[10px] text-slate-400 text-center leading-normal">
                    🔒 <strong>Patient confidentiality is guaranteed.</strong> Your information is stored securely and only accessible by Dr. Amrita Shrestha and the clinical intake coordinator.
                  </p>

                </form>
              ) : (
                /* Success screen */
                <motion.div
                  id="appointment-success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-extrabold text-xl text-slate-900">
                      Booking Request Submitted!
                    </h4>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your request for <strong className="text-slate-800">{formData.service}</strong> on <strong className="text-slate-800">{formData.date}</strong> has been transmitted successfully.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-[16px] text-left max-w-sm mx-auto text-xs space-y-2.5">
                    <p className="text-slate-600 leading-relaxed font-bold">
                      🗓️ What happens next?
                    </p>
                    <ul className="list-disc list-inside text-slate-500 space-y-1">
                      <li>Our clinic coordinator will call you within 1-2 business hours.</li>
                      <li>We will verify the exact timing and lock in your appointment slot.</li>
                      <li>You will receive a confirmation call or SMS with details.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-xs mx-auto pt-4">
                    <a
                      href="tel:+9779851213380"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 transition-all"
                    >
                      <Phone className="w-4 h-4 text-sky-600" />
                      <span>Call to Fast-Track</span>
                    </a>
                    
                    <button
                      onClick={resetModal}
                      className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md"
                    >
                      Close Window
                    </button>
                  </div>

                </motion.div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
