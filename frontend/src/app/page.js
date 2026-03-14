import Link from 'next/link';

// ─── Page-level Metadata (overrides layout defaults) ─────────────────────────
export const metadata = {
  title: 'CaterEase — Find Premium Caterers for Every Occasion',
  description:
    'Discover top-rated caterers for weddings, corporate events, and more. Filter by price, cuisine, and location. Book your perfect caterer today with CaterEase.',
  openGraph: {
    title: 'CaterEase — Find Premium Caterers for Every Occasion',
    description:
      'Browse hundreds of top-rated caterers. Filter by cuisine, price, and location. CaterEase makes finding the perfect caterer effortless.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CaterEase — Premium Catering Discovery Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaterEase — Find Premium Caterers',
    description:
      'Browse top-rated caterers for any event. Filter by price, cuisine, and location.',
    images: ['/og-image.jpg'],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CaterEase',
  description:
    'A premium catering discovery platform to find top-rated caterers for every occasion.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/caterers?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-[calc(100vh-5rem)] bg-[#00153d] flex flex-col items-center justify-center px-6 text-center">

        {/* Decorative ring */}
        <div className="relative mb-10">
          <div className="w-28 h-28 rounded-full bg-[#e2b157]/10 border-2 border-[#e2b157]/30 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e2b157"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white leading-tight max-w-2xl">
          Find Your Perfect{' '}
          <span className="text-[#e2b157]">Caterer</span>
        </h1>

        <p className="mt-5 text-blue-200/70 text-lg max-w-lg">
          Discover top-rated caterers for every occasion — from intimate gatherings to grand celebrations.
        </p>

        {/* CTA Button */}
        <Link
          href="/caterers"
          className="mt-10 inline-flex items-center gap-3 bg-[#e2b157] text-[#00153d] font-bold text-lg px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(226,177,87,0.25)] hover:shadow-[0_0_40px_rgba(226,177,87,0.45)] hover:scale-105 transition-all duration-300 active:scale-95"
        >
          View Caterers
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </>
  );
}

