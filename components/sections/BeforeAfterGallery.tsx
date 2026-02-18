'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import type { BeforeAfterGalleryProps } from '@/types';

export default function BeforeAfterGallery({
  title = 'Before & After',
  subtitle = 'See the difference our team makes',
  pairs,
}: BeforeAfterGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!pairs || pairs.length === 0) return null;

  return (
    <div>
      <SectionHeading title={title} subtitle={subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pairs.map((pair, index) => (
          <button
            key={index}
            onClick={() => setLightboxIndex(index)}
            className="group cursor-pointer text-left"
          >
            <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              {/* Before */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={pair.before}
                  alt={`Before - ${pair.caption}`}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Before
                </span>
              </div>
              {/* After */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={pair.after}
                  alt={`After - ${pair.caption}`}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  After
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-600 text-center">
              {pair.caption}
            </p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-bronze transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={pairs[lightboxIndex].before}
                    alt={`Before - ${pairs[lightboxIndex].caption}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={pairs[lightboxIndex].after}
                    alt={`After - ${pairs[lightboxIndex].caption}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    After
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-white text-lg">
                {pairs[lightboxIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
