'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { toast } from 'react-toastify';

const PLACEHOLDER_JOBS = [
  { id: 1, title: 'DevOps Engineer', location: 'Limassol, Cyprus', type: 'Full-time' },
  { id: 2, title: 'Marketing Specialist', location: 'Remote', type: 'Full-time' },
  { id: 3, title: 'Fintech Developer', location: 'Limassol, Cyprus', type: 'Full-time' },
];

export function CurrentOpportunitiesSection() {
  const [selectedJob, setSelectedJob] = useState(null);

  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      city: '',
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.jobTitle) errors.jobTitle = 'Please select a role.';
      if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
      if (!values.email.trim()) {
        errors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Please enter a valid email.';
      }
      if (!values.phone) errors.phone = 'Phone is required.';
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
          email: values.email.trim(),
          phone: values.phone.trim(),
          url: '',
          experience: '',
          job_title: values.jobTitle,
          city: values.city,
          message: values.coverLetter.trim(),
          fileName: values.resume?.name || 'resume',
          resume: resumeBase64,
        };

        const res = await fetch('/api/career-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('Request failed');

        setStatus('success');
        toast.success('Application submitted successfully.');
        resetForm();
        setSelectedJob(null);
      } catch {
        setStatus('error');
        toast.error('Something went wrong. Please try again.');
      }
    },
  });

  return (
    <div className=" mb-10 md:mb-14 gtc-container">
    <section id="opportunities" className="gtc-section">
      <div className="">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="gtc-eyebrow text-emerald-600">
            Join Us
          </p>
          <h2 className="mt-2 gtc-title">
            Current Opportunities
          </h2>
          <p className="mt-3 gtc-body">
            Explore our current openings and discover where your expertise can contribute to the
            continued growth of GTC MARKETS (CY) LTD.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {PLACEHOLDER_JOBS.map((job) => (
              <button
                key={job.id}
                type="button"
                onClick={() => {
                  const isSelected = selectedJob?.id === job.id;
                  const nextJob = isSelected ? null : job;
                  setSelectedJob(nextJob);
                  formik.setFieldValue('jobTitle', nextJob?.title || '');
                  formik.setFieldValue('city', nextJob?.location || '');
                }}
                className={`w-full rounded-xl border p-4 text-left transition sm:rounded-2xl sm:p-5 ${
                  selectedJob?.id === job.id
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">{job.title}</h3>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm">{job.location} · {job.type}</p>
              </button>
            ))}
            {(formik.submitCount > 0 || formik.touched.jobTitle) && formik.errors.jobTitle && (
              <p className="text-xs font-medium text-red-700 sm:text-sm">{formik.errors.jobTitle}</p>
            )}
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 md:p-8">
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg">Apply for this position</h3>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm">
              {selectedJob
                ? `Applying for: ${selectedJob.title}`
                : 'Select a role on the left to start your application.'}
            </p>

            <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="careers-name" className="block text-xs font-medium text-gray-700 sm:text-sm">
                  Full Name
                </label>
                <input
                  id="careers-name"
                  name="fullName"
                  type="text"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:px-4 sm:py-2.5 sm:text-sm"
                />
                {(formik.touched.fullName || formik.submitCount > 0) && formik.errors.fullName && (
                  <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.fullName}</p>
                )}
              </div>
              <div>
                <label htmlFor="careers-email" className="block text-xs font-medium text-gray-700 sm:text-sm">
                  Email
                </label>
                <input
                  id="careers-email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:px-4 sm:py-2.5 sm:text-sm"
                />
                {(formik.touched.email || formik.submitCount > 0) && formik.errors.email && (
                  <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="careers-phone" className="block text-xs font-medium text-gray-700 sm:text-sm">
                  Phone
                </label>
                <PhoneInput
                  id="careers-phone"
                  defaultCountry="AE"
                  international
                  name="phone"
                  value={formik.values.phone}
                  onChange={(value) => formik.setFieldValue('phone', value || '')}
                  onBlur={() => formik.setFieldTouched('phone', true)}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
                />
                {(formik.touched.phone || formik.submitCount > 0) && formik.errors.phone && (
                  <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.phone}</p>
                )}
              </div>
              <div>
                <label htmlFor="careers-resume" className="block text-xs font-medium text-gray-700 sm:text-sm">
                  Resume / CV
                </label>
                <input
                  id="careers-resume"
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
                <label htmlFor="careers-cover" className="block text-xs font-medium text-gray-700 sm:text-sm">
                  Cover Letter
                </label>
                <textarea
                  id="careers-cover"
                  name="coverLetter"
                  rows={4}
                  value={formik.values.coverLetter}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:px-4 sm:py-2.5 sm:text-sm"
                />
                {(formik.touched.coverLetter || formik.submitCount > 0) && formik.errors.coverLetter && (
                  <p className="mt-1 text-xs font-medium text-red-700">{formik.errors.coverLetter}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:py-3 sm:text-sm"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
