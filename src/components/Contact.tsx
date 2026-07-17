import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { services } from "../data";

interface ContactProps {
  onOpenAppointment: (preselectedService?: string) => void;
}

export default function Contact({ onOpenAppointment }: ContactProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "General Consultation",
    date: "",
    timeSlot: "morning",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim()) {
      setError("Please write your full name.");
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
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
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sky-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Premium CTA Section - Bento Dark Style */}
        <div className="bg-slate-900 border border-slate-800 rounded-[24px] p-8 sm:p-12 md:p-16 text-white shadow-sm relative overflow-hidden mb-16 text-center md:text-left">
          
          {/* Background circles */}
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8 space-y-4">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-widest block">Start Your Skin Recovery</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
                Take the First Step Towards Healthier Skin
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Book your consultation today and receive expert dermatology care tailored to your skin, hair, and nail needs. We provide evidence-based, compassionate care.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-4 justify-center md:items-end">
              <button
                onClick={() => onOpenAppointment()}
                className="w-full sm:w-auto px-8 py-4 bg-sky-600 text-white font-bold rounded-2xl hover:bg-sky-700 transition-all shadow-md text-center"
              >
                Schedule Appointment
              </button>
              <a
                href="tel:+9779851213380"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 border-2 border-slate-700 text-slate-200 font-bold rounded-2xl hover:border-slate-600 hover:bg-slate-800/80 transition-all text-center"
              >
                Call Direct: +977 9851213380
              </a>
            </div>
          </div>
        </div>

        {/* Contact info and Form Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          
          {/* Left Side: Clinic Information & Google Maps Mock */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-left">
              <span className="text-sky-600 text-xs font-bold uppercase tracking-widest block">Visit Our Clinic</span>
              <h3 className="text-3xl font-display font-bold text-slate-900 tracking-tight">
                Dr. Amrita Shrestha
              </h3>
              <p className="text-slate-500 text-sm sm:text-base">
                Consultant Dermatologist specializing in Dermatology and Venereology. We operate a highly structured clinical schedule to respect patient appointments.
              </p>
            </div>

            {/* Quick Details Cards list */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="flex gap-4 p-5 bg-white rounded-[24px] border border-slate-100 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">Direct Phone Call</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Primary clinic registration</p>
                  <a href="tel:+9779851213380" className="text-sky-600 font-bold text-sm sm:text-base block mt-1 hover:underline">
                    +977 9851213380
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4 p-5 bg-white rounded-[24px] border border-slate-100 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">Email Correspondence</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Business & inquiry mail</p>
                  <a href="mailto:info@dramritashrestha.com.np" className="text-emerald-600 font-bold text-sm sm:text-base block mt-1 hover:underline">
                    info@dramritashrestha.com.np
                  </a>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="flex gap-4 p-5 bg-white rounded-[24px] border border-slate-100 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-display font-bold text-slate-800 text-sm">Business Hours</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Weekly clinical roster</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-xs font-semibold text-slate-600">
                    <span>Sunday - Friday:</span>
                    <span className="text-slate-900 font-bold text-right">9:30 AM - 7:30 PM</span>
                    <span>Saturday:</span>
                    <span className="text-slate-400 text-right">Closed (Emergency Only)</span>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex gap-4 p-5 bg-white rounded-[24px] border border-slate-100 shadow-sm text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">Clinic Location</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Kathmandu, Nepal</p>
                  <p className="text-slate-700 font-bold text-xs sm:text-sm mt-1">
                    Aesthetic Skin Clinic, New Baneshwor, Kathmandu, Nepal
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Visual Representation */}
            <div className="relative rounded-[24px] overflow-hidden border border-slate-200 shadow-sm h-64 bg-slate-100 group">
              
              {/* Fallback Static Visual Map Background */}
              <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="font-display font-bold text-slate-800 text-sm">Aesthetic Skin Clinic Map</h4>
                <p className="text-slate-500 text-xs max-w-xs mt-1">
                  Conveniently situated in New Baneshwor, Kathmandu. Close to major transit hubs with ample clinical parking.
                </p>
                
                {/* External link to Google Maps */}
                <a
                  href="https://maps.google.com/?q=New+Baneshwor+Kathmandu+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-sky-700 text-xs font-bold rounded-lg shadow-sm transition-all"
                >
                  Open in Google Maps
                </a>
              </div>

            </div>

          </div>

          {/* Right Side: Appointment Intake Form */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-10 border border-slate-100 shadow-sm">
            <div className="space-y-2 mb-8 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Instant Intake Request
                </h3>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm">
                Submit this secure form to request a callback from our medical receptionist to lock in your diagnostic slot.
              </p>
            </div>

            {!submitSuccess ? (
              <form id="contact-intake-form" onSubmit={handleFormSubmit} className="space-y-4 text-left">
                
                {error && (
                  <div className="flex items-start gap-2.5 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-xs font-semibold">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5 text-red-600" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Patient Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Name <span className="text-sky-600">*</span>
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

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Mobile Phone Number <span className="text-sky-600">*</span>
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
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. aarav@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Service required */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Dermatological Care Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all"
                  >
                    <option value="General Consultation">General Consultation</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Date & Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      Timing Preference
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

                {/* Message notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Message or Clinical Symptoms (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Brief description of skin issues, duration, etc..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring focus:ring-sky-100 text-sm focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-sky-600/10 transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Transmitting Intake Data...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Secure Booking Request</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              /* Success form block */
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-2xl text-slate-900">
                    Thank you! Request Received
                  </h4>
                  <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                    We have successfully captured your booking request for <strong className="text-slate-800">{formData.service}</strong> on <strong className="text-slate-800">{formData.date}</strong>. Our clinical intake desk will phone you within 1-2 hours to confirm details.
                  </p>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-full border border-slate-200 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
