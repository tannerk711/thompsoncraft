import Link from 'next/link';

type EstimateResultProps = {
  estimate: {
    estimatedVolume: string;
    priceRange: string;
    reasoning: string;
    confidence: string;
  };
};

export default function EstimateResult({ estimate }: EstimateResultProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>

      <h2 className="mt-4 font-display text-2xl font-semibold text-slate-900">
        Your Estimate is Ready!
      </h2>

      <div className="mt-8 rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-6">
        <div className="text-center">
          <p className="text-sm font-medium text-slate-600">Estimated Volume</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">{estimate.estimatedVolume}</p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-slate-600">Price Range</p>
          <p className="mt-1 text-4xl font-bold text-blue-600">{estimate.priceRange}</p>
        </div>

        <div className="mt-6 rounded-lg bg-white p-4">
          <p className="text-sm font-medium text-slate-900">Analysis</p>
          <p className="mt-2 text-sm text-slate-600">{estimate.reasoning}</p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600">
          <svg
            className="h-5 w-5 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
            />
          </svg>
          <span>AI Confidence: {estimate.confidence}</span>
        </div>
      </div>

      <div className="mt-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900">
          What happens next?
        </h3>
        <ul className="mt-4 space-y-2 text-left text-sm text-slate-600">
          <li className="flex items-start">
            <svg className="mr-2 h-5 w-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>We've received your information and will contact you within 1 hour</span>
          </li>
          <li className="flex items-start">
            <svg className="mr-2 h-5 w-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>We'll confirm the quote and schedule a convenient pickup time</span>
          </li>
          <li className="flex items-start">
            <svg className="mr-2 h-5 w-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <span>Our team will haul away your junk and clean up the area</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href="tel:+12085551234"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          Call Us Now
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
