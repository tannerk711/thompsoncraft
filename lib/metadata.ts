import type { Metadata } from 'next';
import type { ServicePage, LocationPage } from '@/types';
import { siteConfig } from '@/data/site';

// ── Service Page Metadata ───────────────────────────────────────────

export function generateServiceMetadata(service: ServicePage): Metadata {
  return {
    title: service.meta.title,
    description: service.meta.description,
    alternates: {
      canonical: `${siteConfig.baseUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url: `${siteConfig.baseUrl}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: `${siteConfig.baseUrl}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.heroHeadline,
        },
      ],
    },
  };
}

// ── Location Page Metadata ──────────────────────────────────────────

export function generateLocationMetadata(location: LocationPage): Metadata {
  return {
    title: location.meta.title,
    description: location.meta.description,
    alternates: {
      canonical: `${siteConfig.baseUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.meta.title,
      description: location.meta.description,
      url: `${siteConfig.baseUrl}/locations/${location.slug}`,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: `${siteConfig.baseUrl}${location.heroImage}`,
          width: 1200,
          height: 630,
          alt: location.heroHeadline,
        },
      ],
    },
  };
}

// ── Service JSON-LD ─────────────────────────────────────────────────

export function generateServiceJsonLd(service: ServicePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.meta.description,
    url: `${siteConfig.baseUrl}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Idaho',
    },
    image: `${siteConfig.baseUrl}${service.heroImage}`,
  };
}

// ── Location JSON-LD ────────────────────────────────────────────────

export function generateLocationJsonLd(location: LocationPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${location.city}`,
    description: location.meta.description,
    url: `${siteConfig.baseUrl}/locations/${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: 'Idaho',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
    image: `${siteConfig.baseUrl}${location.heroImage}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
  };
}
