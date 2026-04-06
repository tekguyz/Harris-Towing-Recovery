import type {Metadata} from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import MobileActionBar from '@/components/MobileActionBar';

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Harris Towing & Recovery | 24/7 Towing & Recovery',
  description: 'Fast, reliable 24/7 towing and recovery services in Broward, Palm Beach & Miami-Dade.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TowingService",
    "name": "Harris Towing & Recovery",
    "image": "https://ais-dev-pwibuyoevrcwiltkrkfssc-3822686412.us-west2.run.app/logo.png",
    "@id": "https://ais-dev-pwibuyoevrcwiltkrkfssc-3822686412.us-west2.run.app",
    "url": "https://ais-dev-pwibuyoevrcwiltkrkfssc-3822686412.us-west2.run.app",
    "telephone": "954-249-6753",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Broward & Palm Beach",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33301",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 26.1224,
        "longitude": -80.1373
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Broward County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Miami-Dade County"
      }
    ]
  };

  return (
    <html lang="en" className={`${quicksand.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased flex flex-col min-h-screen pb-[80px] md:pb-0">
        <div className="bg-espresso-pro text-white text-center py-2 text-sm font-bold tracking-wide">
          24/7 Towing in Broward, Palm Beach & Miami-Dade
        </div>
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
