 
// layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import Script from "next/script";

// ØªØ­Ø³ÙŠÙ† Ø§Ù„Ø®Ø·ÙˆØ·
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// ØªØ­Ø³ÙŠÙ† Ø§Ù„Ù€ Metadata Ù„Ù„Ù€ SEO
export const metadata: Metadata = {
  title: {
    default: "FlavorLand - Discover Delicious Recipes",
    template: "%s | FlavorLand"
  },
  description: "Explore thousands of delicious recipes from around the world. Find easy cooking instructions, healthy meals, and gourmet dishes for every occasion.",
  keywords: ["recipes", "cooking", "food", "healthy meals", "gourmet", "cooking tips", "meal ideas"],
  authors: [{ name: "FlavorLand Team" }],
  creator: "FlavorLand",
  publisher: "FlavorLand",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FlavorLand - Discover Delicious Recipes",
    description: "Explore thousands of delicious recipes from around the world.",
    url: "/",
    siteName: "FlavorLand",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FlavorLand - Delicious Recipes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlavorLand - Discover Delicious Recipes",
    description: "Explore thousands of delicious recipes from around the world.",
    images: ["/twitter-image.jpg"],
    creator: "@flavorland",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#667eea",
      },
    ],
  },
  manifest: "/manifest.json",
};

// ØªØ­Ø³ÙŠÙ† Ø§Ù„Ù€ Viewport
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#667eea" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://www.themealdb.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.themealdb.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        
        {/* Favicon for all platforms */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#667eea" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#667eea" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FlavorLand",
              "url": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              },
              "description": "Discover delicious recipes from around the world",
              "publisher": {
                "@type": "Organization",
                "name": "FlavorLand",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/logo.svg`
                }
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased d-flex flex-column min-vh-100">
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="visually-hidden-focusable position-absolute top-0 start-0 p-2 bg-primary text-white">
          Skip to main content
        </a>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main id="main-content" className="flex-grow-1">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Service Worker Registration for PWA */}
        <Script
          src="/sw-register.js"
          strategy="afterInteractive"
        />

        {/* Performance Monitoring */}
        <Script id="performance-monitoring" strategy="afterInteractive">
          {`
            if (window.performance) {
              window.addEventListener('load', function() {
                setTimeout(function() {
                  const perfData = window.performance.timing;
                  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                  console.log('Page load time:', pageLoadTime, 'ms');
                  
                  // ÙŠÙ…ÙƒÙ† Ø¥Ø±Ø³Ø§Ù„ Ù‡Ø°Ù‡ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ø¥Ù„Ù‰ Ø®Ø¯Ù…Ø© ØªØ­Ù„ÙŠÙ„Ø§Øª
                  if (pageLoadTime > 3000) {
                    console.warn('Page load time is slow:', pageLoadTime);
                  }
                }, 0);
              });
            }
          `}
        </Script>

        {/* Bootstrap JS - ÙŠØªÙ… Ø§Ù„ØªØ­Ù…ÙŠÙ„ Ø¹Ù†Ø¯ Ø§Ù„Ø­Ø§Ø¬Ø© */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

// Scroll to Top Component
const ScrollToTop = () => {
  return (
    <Script id="scroll-to-top" strategy="lazyOnload">
      {`
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = 'â†‘';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        scrollToTopBtn.style.cssText = \`
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          cursor: pointer;
          display: none;
          font-size: 24px;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
          z-index: 1000;
        \`;

        scrollToTopBtn.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
          this.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
        });

        scrollToTopBtn.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        });

        scrollToTopBtn.addEventListener('click', function() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });

        document.body.appendChild(scrollToTopBtn);

        window.addEventListener('scroll', function() {
          if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'block';
            scrollToTopBtn.style.animation = 'fadeIn 0.3s ease';
          } else {
            scrollToTopBtn.style.display = 'none';
          }
        });

        // Add animation style
        const style = document.createElement('style');
        style.textContent = \`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        \`;
        document.head.appendChild(style);
      `}
    </Script>
  );
};

