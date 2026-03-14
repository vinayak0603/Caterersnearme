import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'CaterEase — Find Premium Caterers',
    template: '%s | CaterEase',
  },
  description:
    'Discover top-rated caterers for every occasion — from intimate gatherings to grand celebrations. Browse, filter, and book with CaterEase.',
  openGraph: {
    siteName: 'CaterEase',
    type: 'website',
    locale: 'en_US',
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
    site: '@CaterEase',
    images: ['/og-image.jpg'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-white bg-[#00153d] min-h-screen">
        {/* Navigation Header - Dark Blue with Gold Logo */}
        <nav className="border-b border-blue-900/50 bg-[#00153d] sticky top-0 z-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center gap-3">
                {/* Utensils icon via inline SVG to avoid client directive in layout */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e2b157"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
                <span className="text-3xl font-serif font-bold text-[#e2b157] tracking-tight">
                  CaterEase
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main>{children}</main>
      </body>
    </html>
  );
}
