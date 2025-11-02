'use client';
import { useEffect, useState } from 'react';

const messages = [
  "Analyzing your photos...",
  "Junkifying the data...",
  "Estimating volumes...",
  "Calculating prices...",
  "Working our junk wizardry...",
  "Crunching the numbers..."
];

export default function LoadingAnimation() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Rotate messages every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Smart progress: fast start, slow end
  useEffect(() => {
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const seconds = elapsed / 1000;

      let newProgress = 0;
      if (seconds < 2) {
        // 0-30% in first 2 seconds
        newProgress = (seconds / 2) * 30;
      } else if (seconds < 5) {
        // 30-60% in next 3 seconds
        newProgress = 30 + ((seconds - 2) / 3) * 30;
      } else if (seconds < 8) {
        // 60-90% in next 3 seconds
        newProgress = 60 + ((seconds - 5) / 3) * 30;
      } else {
        // Stay at 90% waiting for API
        newProgress = 90;
      }

      setProgress(Math.min(newProgress, 90));
    };

    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 rounded-2xl p-8">
      <div className="w-full max-w-2xl text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">
            Hang tight! Our AI is working its magic ✨
          </h2>
          <p className="text-slate-600">
            We're analyzing your photos to give you the most accurate estimate
          </p>
        </div>

        {/* Truck Animation Container */}
        <div className="relative h-48 mb-8 overflow-hidden">
          {/* Road */}
          <div className="absolute bottom-16 left-0 right-0 h-1 bg-slate-300">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-shimmer"></div>
          </div>

          {/* Animated Truck */}
          <div className="absolute bottom-12 w-full">
            <div className="truck-animation">
              <svg
                className="w-32 h-32 mx-auto"
                viewBox="0 0 200 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Truck Bed */}
                <rect x="20" y="50" width="100" height="50" fill="#2563eb" rx="4" />

                {/* Truck Cab */}
                <path d="M120 60 L160 60 L160 100 L120 100 Z" fill="#1e40af" />
                <path d="M140 60 L160 60 L160 75 L150 75 Z" fill="#60a5fa" opacity="0.5" />

                {/* Items in truck bed (staggered animation) */}
                <g className="junk-items">
                  <rect x="30" y="60" width="20" height="20" fill="#fbbf24" className="junk-item" style={{ animationDelay: '0s' }} />
                  <rect x="55" y="55" width="25" height="25" fill="#f59e0b" className="junk-item" style={{ animationDelay: '0.5s' }} />
                  <circle cx="95" cy="70" r="12" fill="#ef4444" className="junk-item" style={{ animationDelay: '1s' }} />
                  <rect x="75" y="65" width="15" height="20" fill="#10b981" className="junk-item" style={{ animationDelay: '1.5s' }} />
                </g>

                {/* Wheels */}
                <g className="wheels-animation">
                  <circle cx="50" cy="105" r="12" fill="#1f2937" />
                  <circle cx="50" cy="105" r="6" fill="#6b7280" />
                  <circle cx="140" cy="105" r="12" fill="#1f2937" />
                  <circle cx="140" cy="105" r="6" fill="#6b7280" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Rotating Messages */}
        <div className="relative h-8 mb-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                index === messageIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-lg font-medium text-blue-600">{message}</p>
            </div>
          ))}
        </div>

        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium animate-pulse">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
          </svg>
          AI-Powered Analysis
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes truckDrive {
            0% { transform: translateX(-20%); }
            100% { transform: translateX(120%); }
          }

          @keyframes wheelSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(1080deg); }
          }

          @keyframes itemDrop {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .truck-animation {
            animation: truckDrive 8s ease-in-out infinite;
          }

          .wheels-animation {
            animation: wheelSpin 2s linear infinite;
            transform-origin: center;
          }

          .junk-item {
            animation: itemDrop 1s ease-out forwards;
            opacity: 0;
          }

          .animate-shimmer {
            animation: shimmer 2s infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .truck-animation,
            .wheels-animation,
            .junk-item,
            .animate-shimmer {
              animation: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
