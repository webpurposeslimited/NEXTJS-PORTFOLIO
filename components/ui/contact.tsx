"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconPhone, IconMapPin, IconSend } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import { companies, contactContent, websiteInfo, socialLinks } from "@/data";
import Image from "next/image";
import { validateName, validateEmail, validateMessage, debounce, isFormValid } from "@/lib/validation";

// Form input animation variants
const formItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      delay: custom * 0.1,
      ease: "easeOut" 
    }
  })
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Check form validity whenever errors or formData change
  useEffect(() => {
    setFormValid(isFormValid(errors) && 
      formData.name.trim() !== "" && 
      formData.email.trim() !== "" && 
      formData.message.trim() !== "");
  }, [errors, formData]);

  // Create debounced validation functions
  const debouncedValidate = debounce((field: string, value: string) => {
    let validationResult;
    
    switch (field) {
      case 'name':
        validationResult = validateName(value);
        break;
      case 'email':
        validationResult = validateEmail(value);
        break;
      case 'message':
        validationResult = validateMessage(value);
        break;
      default:
        validationResult = { valid: true, message: "" };
    }
    
    setErrors(prev => ({
      ...prev,
      [field]: validationResult.message
    }));
  }, 300);
  
  const validateField = (name: string, value: string): string => {
    let validationResult;
    
    switch (name) {
      case 'name':
        validationResult = validateName(value);
        break;
      case 'email':
        validationResult = validateEmail(value);
        break;
      case 'message':
        validationResult = validateMessage(value);
        break;
      default:
        validationResult = { valid: true, message: "" };
    }
    
    return validationResult.message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Mark field as touched
    if (!touched[name as keyof typeof touched]) {
      setTouched(prev => ({ ...prev, [name]: true }));
    }
    
    // Real-time validation with debounce
    debouncedValidate(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Immediate validation on blur (no debounce)
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setAttemptedSubmit(true); // Mark that submit was attempted
    
    // Validate all fields before submission
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true
    }); // Mark all fields as touched when submitting
    
    // Check if there are any validation errors
    if (Object.values(newErrors).some(error => error !== "")) {
      return; // Stop submission if there are errors
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Convert FormData to a plain object for emailjs
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };
      
      await emailjs.send(
        contactContent.emailJs.serviceId,
        contactContent.emailJs.templateId,
        templateParams,
        contactContent.emailJs.publicKey
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setAttemptedSubmit(false); // Reset attempted submit flag on success
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(error?.text || contactContent.formStatus.error);
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-zinc-900/30 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-accentColors-primary/5 rounded-full filter blur-[120px] opacity-40 animate-moveInCircle will-change-transform" />
        <div className="absolute bottom-1/3 right-1/4 w-[25rem] h-[25rem] bg-accentColors-secondary/5 rounded-full filter blur-[100px] opacity-30 animate-moveHorizontal will-change-transform" />
      </div>
      <div className="max-w-7xl mx-auto">
        
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 border-y border-zinc-800/50 bg-gradient-to-r from-transparent via-zinc-800/10 to-transparent">
            {companies.map((company, index) => (
              <motion.div 
                key={index} 
                className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0.5, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Image 
                  src={company.img} 
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative inline-block">
            {contactContent.sectionTitle}
            <motion.span 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accentColors-primary to-accentColors-highlight"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">{contactContent.contactInfo.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 rounded-lg text-accentColors-primary">
                    <IconMail size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">{contactContent.contactInfo.email.label}</p>
                    <a href={`mailto:${contactContent.contactInfo.email.value}`} className="text-white hover:text-accentColors-purple transition-colors">
                      {contactContent.contactInfo.email.value}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 rounded-lg text-accentColors-secondary">
                    <IconPhone size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">{contactContent.contactInfo.phone.label}</p>
                    <a href={`tel:${contactContent.contactInfo.phone.value.replace(/\s/g, '')}`} className="text-white hover:text-accentColors-purple transition-colors">
                      {contactContent.contactInfo.phone.value}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-800 rounded-lg text-accentColors-highlight">
                    <IconMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">{contactContent.contactInfo.location.label}</p>
                    <p className="text-white">{contactContent.contactInfo.location.value}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">{contactContent.socialHeading}</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  // This is a simplified approach - in a real implementation, you would dynamically import icons
                  let Icon;
                  if (link.icon === "IconBrandGithub") Icon = IconBrandGithub;
                  else if (link.icon === "IconBrandLinkedin") Icon = IconBrandLinkedin;
                  else if (link.icon === "IconBrandTwitter") Icon = IconBrandTwitter;
                  
                  return (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-zinc-800 rounded-lg text-zinc-400 hover:text-accentColors-primary hover:bg-zinc-700/80 transition-all duration-300"
                    >
                      {Icon && <Icon size={20} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Animated decorative elements */}
            <div className="relative">
              <div className="absolute right-0 top-0 -z-10 opacity-20">
                <motion.div 
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-accentColors-primary/30 to-accentColors-secondary/10 blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
              
              <form onSubmit={handleSubmit} className="bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/50 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                  >
                    <label htmlFor="name" className="block text-zinc-400 text-sm mb-2 flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accentColors-primary"></span>
                      {contactContent.formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.name ? "true" : "false"}
                      className={`w-full bg-zinc-800 border ${touched.name && errors.name ? 'border-red-500' : touched.name && !errors.name ? 'border-green-500' : 'border-zinc-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accentColors-primary/50 focus:border-accentColors-primary transition-all duration-300 shadow-sm hover:shadow-accentColors-primary/10`}
                    />
                    {touched.name && errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                  >
                    <label htmlFor="email" className="block text-zinc-400 text-sm mb-2 flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accentColors-accent"></span>
                      {contactContent.formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`w-full bg-zinc-800 border ${touched.email && errors.email ? 'border-red-500' : touched.email && !errors.email ? 'border-green-500' : 'border-zinc-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accentColors-accent/50 focus:border-accentColors-accent transition-all duration-300 shadow-sm hover:shadow-accentColors-accent/10`}
                    />
                    {touched.email && errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1 flex items-center gap-1"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div 
                  className="mb-6"
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <label htmlFor="message" className="block text-zinc-400 text-sm mb-2 flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accentColors-highlight"></span>
                      {contactContent.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={errors.message ? "true" : "false"}
                    rows={6}
                    className={`w-full bg-zinc-800 border ${touched.message && errors.message ? 'border-red-500' : touched.message && !errors.message ? 'border-green-500' : 'border-zinc-700'} rounded-lg px-4 py-3 text-white min-h-[150px] focus:outline-none focus:ring-2 focus:ring-accentColors-highlight/50 focus:border-accentColors-highlight transition-all duration-300 shadow-sm hover:shadow-accentColors-highlight/10 resize-none`}
                  />
                  {touched.message && errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1 flex items-center gap-1"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  variants={formItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3}
                >
                  <div className="flex flex-col items-end gap-2 w-full">              
                    {/* Warning message - only show after attempted submit and when there are errors */}
                    {attemptedSubmit && !formValid && (
                      <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-sm font-medium bg-rose-950/20 py-1 px-3 rounded-md border border-rose-800/30 w-full text-center"
                      >
                        Please complete all required fields correctly
                      </motion.p>
                    )}
                    
                    {/* Submit button */}
                    <div className="flex justify-end">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-6 py-3 bg-accentColors-primary hover:bg-accentColors-highlight text-white rounded-lg shadow-md shadow-accentColors-primary/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'} focus:outline-none focus:ring-2 focus:ring-accentColors-primary focus:ring-opacity-50 transition-all duration-300 inline-flex items-center gap-2`}
                        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? contactContent.submittingText : contactContent.formLabels.submit}
                        <IconSend size={18} />
                      </motion.button>
                    </div>
                  </div>
                
                {submitStatus === "success" && (
                  <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 rounded-lg bg-green-800/20 border border-green-800 text-green-200"
                      role="alert"
                    >
                      {contactContent.formStatus.success}
                    </motion.div>
                  )}
                  
                  {submitStatus === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 rounded-lg bg-red-800/20 border border-red-800 text-red-200"
                      role="alert"
                    >
                      <p>{errorMessage || contactContent.formStatus.error}</p>
                      <p className="text-sm mt-1">Please try again or contact directly via email.</p>
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* End of Contact Section */}
    </section>
  );

  
}
