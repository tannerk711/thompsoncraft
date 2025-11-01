import { useFormContext } from 'react-hook-form';

export default function ContactStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-slate-900">
        Let's start with your contact info
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        We'll use this to send you the quote and schedule your junk removal.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-900">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-900">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: 'Phone number is required' })}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="(208) 555-1234"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message as string}</p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-slate-900">
            Street Address
          </label>
          <input
            type="text"
            id="address"
            {...register('address', { required: 'Address is required' })}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="123 Main Street"
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-600">{errors.address.message as string}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-slate-900">
              City
            </label>
            <input
              type="text"
              id="city"
              {...register('city', { required: 'City is required' })}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Boise"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message as string}</p>
            )}
          </div>

          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-slate-900">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              {...register('zip', { required: 'ZIP code is required' })}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="83702"
            />
            {errors.zip && (
              <p className="mt-1 text-sm text-red-600">{errors.zip.message as string}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
