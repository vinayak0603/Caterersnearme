import CaterersPage from '../../components/CaterersPage';

// ─── Page-level Metadata ──────────────────────────────────────────────────────
export const metadata = {
  title: 'Browse Caterers — Find the Best Catering Services',
  description:
    'Explore our curated list of premium caterers. Filter by cuisine type, maximum price, and location to find the perfect caterer for your next event.',
  openGraph: {
    title: 'Browse Caterers on CaterEase — Premium Catering Services',
    description:
      'Find top-rated caterers for weddings, corporate events, birthdays and more. Search, filter, and contact caterers instantly.',
    url: '/caterers',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Browse premium caterers on CaterEase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse Caterers — CaterEase',
    description:
      'Find top-rated caterers for any event. Filter by price, cuisine, and location.',
    images: ['/og-image.jpg'],
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Browse Caterers — CaterEase',
  description:
    'A curated collection of premium catering services for every occasion.',
  url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/caterers`,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Caterers',
        item: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/caterers`,
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'CaterEase',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: {
      '@type': 'ImageObject',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.jpg`,
    },
  },
};

export default function CaterersRoute() {
  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaterersPage />
    </>
  );
}

