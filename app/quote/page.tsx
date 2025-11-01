'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Link from 'next/link';
import ContactStep from '@/components/quote/ContactStep';
import PhotoUploadStep from '@/components/quote/PhotoUploadStep';
import ReviewStep from '@/components/quote/ReviewStep';
import EstimateResult from '@/components/quote/EstimateResult';

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  photos: Array<{
    url: string;
    publicId: string;
    thumbnail: string;
  }>;
  notes?: string;
};

type Estimate = {
  estimatedVolume: string;
  priceRange: string;
  reasoning: string;
  confidence: string;
};

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const methods = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
      photos: [],
      notes: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Call AI estimation API
      const estimateRes = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photos: data.photos, notes: data.notes }),
      });

      if (!estimateRes.ok) {
        throw new Error('Failed to get estimate');
      }

      const estimateData = await estimateRes.json();
      setEstimate(estimateData);

      // Save lead to Zapier/GHL
      await fetch('/api/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          estimate: estimateData,
        }),
      });

      setStep(4); // Show results
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Failed to generate quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex-1">
                  <div className="flex items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        step >= stepNum
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div
                        className={`h-1 flex-1 ${
                          step > stepNum ? 'bg-blue-600' : 'bg-slate-200'
                        }`}
                      />
                    )}
                  </div>
                  <p
                    className={`mt-2 text-xs font-medium ${
                      step >= stepNum ? 'text-blue-600' : 'text-slate-600'
                    }`}
                  >
                    {stepNum === 1 && 'Contact Info'}
                    {stepNum === 2 && 'Upload Photos'}
                    {stepNum === 3 && 'Review'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {step === 1 && <ContactStep />}
              {step === 2 && <PhotoUploadStep />}
              {step === 3 && <ReviewStep />}
              {step === 4 && estimate && <EstimateResult estimate={estimate} />}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className="mt-8 flex justify-between gap-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={isSubmitting}
                      className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? 'Getting Your Quote...' : 'Get My Quote'}
                    </button>
                  )}
                </div>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
