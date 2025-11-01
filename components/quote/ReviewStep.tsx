import { useFormContext } from 'react-hook-form';

export default function ReviewStep() {
  const { watch, register } = useFormContext();
  const formData = watch();

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-slate-900">
        Review your information
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Please review your details before we generate your quote.
      </p>

      <div className="mt-6 space-y-6">
        {/* Contact Info */}
        <div className="rounded-lg bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">Contact Information</h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Name:</dt>
              <dd className="font-medium text-slate-900">{formData.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Email:</dt>
              <dd className="font-medium text-slate-900">{formData.email}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Phone:</dt>
              <dd className="font-medium text-slate-900">{formData.phone}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Address:</dt>
              <dd className="font-medium text-slate-900 text-right">
                {formData.address}, {formData.city}, {formData.zip}
              </dd>
            </div>
          </dl>
        </div>

        {/* Photos */}
        <div className="rounded-lg bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">Photos</h3>
          <p className="mt-1 text-sm text-slate-600">
            {formData.photos?.length || 0} photo{formData.photos?.length !== 1 ? 's' : ''} uploaded
          </p>
          {formData.photos && formData.photos.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {formData.photos.map((photo: any, index: number) => (
                <img
                  key={index}
                  src={photo.thumbnail || photo.url}
                  alt={`Photo ${index + 1}`}
                  className="h-20 w-full rounded object-cover"
                />
              ))}
            </div>
          )}
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-slate-900">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            {...register('notes')}
            rows={4}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Any special instructions or details about the items?"
          />
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <div className="flex">
          <svg
            className="h-5 w-5 text-blue-600 flex-shrink-0"
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
          <div className="ml-3">
            <p className="text-sm font-medium text-blue-900">
              Our AI will analyze your photos to provide an accurate estimate in seconds!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
