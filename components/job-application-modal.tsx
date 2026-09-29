import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle } from 'lucide-react';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!file) newErrors.file = 'Please upload your resume';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      if (errors.file) {
        setErrors((prev) => ({ ...prev, file: '' }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      
      let fileData = '';
      let fileName = '';
      let mimeType = '';

      if (file) {
        fileName = file.name;
        mimeType = file.type;
        fileData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(',')[1];
            resolve(base64);
          };
          reader.onerror = error => reject(error);
          reader.readAsDataURL(file);
        });
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        jobTitle: jobTitle,
        fileData: fileData,
        fileName: fileName,
        mimeType: mimeType,
        formType: 'job_application'
      };

      // URL from the unified Contact & Careers Apps Script Deployment
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzRr3WJDb1Qa6XhTk-rvQmorerbg3KxXCXapm5BAP8YVJfVch5Yuy-Yp5qYXs12_BdL/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      // With no-cors, we cannot read the JSON response, so we assume success if no network error occurred.
      setIsSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', phone: '', location: '' });
      setFile(null);
    } catch (error) {
      console.error('Failed to submit application', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', location: '' });
      setFile(null);
      setErrors({});
    }, 300); // Wait for modal exit animation to finish
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-card text-card-foreground rounded-2xl shadow-xl flex flex-col max-h-[calc(100vh-2rem)] sm:max-h-[90vh] overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-border shrink-0">
              <div>
                <h2 className="text-xl font-bold">Apply for Role</h2>
                <p className="text-sm text-muted-foreground mt-1 text-primary font-medium">{jobTitle}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for applying to the {jobTitle} role. Our team will review your profile and get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.name ? 'border-red-500' : 'border-input hover:border-muted-foreground/30'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-input hover:border-muted-foreground/30'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-input hover:border-muted-foreground/30'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Current Location <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Bangalore"
                        className={`w-full px-4 py-2.5 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                          errors.location ? 'border-red-500' : 'border-input hover:border-muted-foreground/30'
                        }`}
                      />
                      {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <label className="text-sm font-medium">Resume / CV (PDF, DOCX) <span className="text-red-500">*</span></label>
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors cursor-pointer ${
                        errors.file ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' : 'border-border'
                      }`}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <UploadCloud className={`w-8 h-8 mb-2 ${file ? 'text-primary' : 'text-muted-foreground'}`} />
                      {file ? (
                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                      ) : (
                        <div>
                          <p className="text-sm font-medium">Click to upload or drag & drop</p>
                          <p className="text-xs text-muted-foreground mt-1">Maximum file size 5MB</p>
                        </div>
                      )}
                    </div>
                    {errors.file && <p className="text-xs text-red-500">{errors.file}</p>}
                  </div>

                  <div className="pt-4 border-t border-border mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-70 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting Application...
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
