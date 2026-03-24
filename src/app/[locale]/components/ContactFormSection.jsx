'use client';

import { useRef } from 'react';
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { toast } from 'react-toastify';

const SUBJECT_OPTIONS = [
  'Technology solutions',
  'Partnership opportunities',
  'Marketing support',
  'DevOps / Infrastructure',
  'Other',
];

export function ContactFormSection() {
  const resumeInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      resume: null,
      coverLetter: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
      if (!values.companyName.trim()) errors.companyName = 'Company name is required.';
      if (!values.email.trim()) {
        errors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Please enter a valid email.';
      }
      if (!values.phone) errors.phone = 'Phone number is required.';
      if (!values.subject) errors.subject = 'Please select an inquiry type.';
      if (!values.message.trim()) errors.message = 'Message is required.';
      if (!values.resume) errors.resume = 'Resume / CV is required.';
      if (!values.coverLetter.trim()) errors.coverLetter = 'Cover letter is required.';

      return errors;
    },
    onSubmit: async (values, { resetForm, setStatus }) => {
      setStatus('sending');

      try {
        const resumeBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = String(reader.result || '');
            const base64 = result.includes(',') ? result.split(',')[1] : result;
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(values.resume);
        });

        const nameParts = values.fullName.trim().split(/\s+/);
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ');

        const payload = {
          first_name: firstName,
          last_name: lastName,
          company_name: values.companyName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          inquiry_type: values.subject,
          message: values.message.trim(),
          cover_letter: values.coverLetter.trim(),
          fileName: values.resume?.name || 'attachment',
          resume: resumeBase64,
        };

        const res = await fetch('/api/contact-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('Request failed');

        setStatus('success');
        toast.success('Message sent successfully.');
        resetForm();
        if (resumeInputRef.current) {
          resumeInputRef.current.value = '';
        }
      } catch {
        setStatus('error');
        toast.error('Something went wrong. Please try again.');
      }
    },
  });

  return (
    <div className="gtc-card sm:p-8">
      <h2 className="gtc-card-title">Get in Touch</h2>
      <p className="gtc-card-desc">Send us a message and we’ll respond as soon as we can.</p>

      <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Full Name
          </label>
          <input
            id="contact-name"
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs focus:border-gtc-primary focus:ring-1 focus:ring-gtc-primary sm:px-4 sm:py-2.5 sm:text-sm"
          />
          {(formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.fullName}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Company Name
          </label>
          <input
            id="contact-company"
            name="companyName"
            type="text"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs focus:border-gtc-primary focus:ring-1 focus:ring-gtc-primary sm:px-4 sm:py-2.5 sm:text-sm"
          />
          {(formik.touched.companyName || formik.submitCount > 0) && formik.errors.companyName && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.companyName}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs focus:border-gtc-primary focus:ring-1 focus:ring-gtc-primary sm:px-4 sm:py-2.5 sm:text-sm"
          />
          {(formik.touched.email || formik.submitCount > 0) && formik.errors.email && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Phone Number
          </label>
          <PhoneInput
            id="contact-phone"
            defaultCountry="AE"
            international
            name="phone"
            value={formik.values.phone}
            onChange={(value) => formik.setFieldValue('phone', value || '')}
            onBlur={() => formik.setFieldTouched('phone', true)}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
          />
          {(formik.touched.phone || formik.submitCount > 0) && formik.errors.phone && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Subject / Inquiry Type
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs focus:border-gtc-primary focus:ring-1 focus:ring-gtc-primary sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <option value="">Select...</option>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {(formik.touched.subject || formik.submitCount > 0) && formik.errors.subject && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.subject}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs focus:border-gtc-primary focus:ring-1 focus:ring-gtc-primary sm:px-4 sm:py-2.5 sm:text-sm"
          />
          {(formik.touched.message || formik.submitCount > 0) && formik.errors.message && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-resume" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Resume / CV
          </label>
          <input
            id="contact-resume"
            ref={resumeInputRef}
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => formik.setFieldValue('resume', e.currentTarget.files?.[0] ?? null)}
            onBlur={() => formik.setFieldTouched('resume', true)}
            className="mt-1 w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:font-medium file:text-emerald-700 file:hover:bg-emerald-100"
          />
          {(formik.touched.resume || formik.submitCount > 0) && formik.errors.resume && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.resume}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-cover-letter" className="block text-xs font-medium text-gray-700 sm:text-sm">
            Cover Letter
          </label>
          <textarea
            id="contact-cover-letter"
            name="coverLetter"
            rows={4}
            value={formik.values.coverLetter}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 w-full rounded-xl border border-gtc-border px-3 py-2 text-xs focus:border-gtc-primary focus:ring-1 focus:ring-gtc-primary sm:px-4 sm:py-2.5 sm:text-sm"
          />
          {(formik.touched.coverLetter || formik.submitCount > 0) && formik.errors.coverLetter && (
            <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.coverLetter}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="gtc-primary-btn w-full disabled:opacity-70"
        >
          {formik.isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
