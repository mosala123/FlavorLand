// app/faq/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQ_DATA = [
  {
    category: '🍳 About Recipes',
    items: [
      {
        q: 'Where do your recipes come from?',
        a: 'All our recipes are sourced from TheMealDB — a free, open-source meal database with thousands of authentic recipes from kitchens around the world. Each recipe includes real ingredients, step-by-step instructions, and photos.',
      },
      {
        q: 'How many recipes are available on FlavorLand?',
        a: 'We currently have over 5,000 recipes spanning 15+ world cuisines including Italian, Japanese, Mexican, Indian, and many more. New recipes are added regularly.',
      },
      {
        q: 'Can I filter recipes by cuisine or category?',
        a: 'Yes! Head to the Categories page to browse by cuisine type, or use the Search page to find a specific dish by name. You can also filter by category directly from the Recipes page.',
      },
      {
        q: 'Are the recipes suitable for beginners?',
        a: 'Absolutely. Our recipes come with clear step-by-step instructions and ingredient photos, making them approachable for home cooks of all skill levels — from first-timers to seasoned chefs.',
      },
    ],
  },
  {
    category: '🔍 Using the Website',
    items: [
      {
        q: 'How do I search for a recipe?',
        a: 'Click the "Search" button in the navigation bar, or visit /search. Type any keyword — a dish name, ingredient, or cuisine — and results will appear automatically as you type.',
      },
      {
        q: 'Can I watch a video tutorial for a recipe?',
        a: 'Yes! Many recipes include a "Watch on YouTube" button on the recipe detail page. This links directly to a video tutorial for that specific dish.',
      },
      {
        q: 'What is the difference between Categories and Search?',
        a: 'Categories lets you browse all recipes grouped by food type (e.g. Chicken, Seafood, Dessert). Search lets you find a specific recipe by name in real-time.',
      },
      {
        q: 'Is FlavorLand free to use?',
        a: 'Yes, FlavorLand is completely free. No account required. Just browse, search, and cook!',
      },
    ],
  },
  {
    category: '📱 Technical Questions',
    items: [
      {
        q: 'Does FlavorLand work on mobile?',
        a: 'Yes, FlavorLand is fully responsive and works beautifully on all screen sizes — phones, tablets, and desktops.',
      },
      {
        q: 'Why am I seeing an error page?',
        a: 'This can happen if there is a temporary issue loading data from our recipe API. Try refreshing the page. If the issue persists, use the "Try Again" button on the error page or contact us.',
      },
      {
        q: 'How is the recipe data powered?',
        a: 'FlavorLand uses the free TheMealDB API (themealdb.com) to fetch all recipe data in real-time, including ingredients, instructions, images, and YouTube links.',
      },
    ],
  },
  {
    category: '📩 Contact & Support',
    items: [
      {
        q: 'How can I report a bug or broken recipe?',
        a: 'You can reach us via the Contact page or email us directly. We take all bug reports seriously and aim to fix issues quickly.',
      },
      {
        q: 'Can I suggest a recipe to add?',
        a: 'We love hearing from our community! While we rely on TheMealDB for recipe data, you can suggest recipes via their platform at themealdb.com.',
      },
      {
        q: "I have a question not answered here — what do I do?",
        a: 'No problem! Visit our Contact page and send us a message. We typically respond within 24 hours.',
      },
    ],
  },
];

export default function FaqPage() {
  // Track open item as "sectionIndex-itemIndex"
  const [openKey, setOpenKey] = useState<string | null>('0-0');

  const toggle = (key: string) => setOpenKey(prev => prev === key ? null : key);

  return (
    <div style={{ background: '#faf8f5', minHeight: '100vh' }}>

      {/* ── Page Banner ── */}
      <div
        className="text-center text-white py-5"
        style={{ background: 'linear-gradient(135deg, #2d4a3e 0%, #1a2e25 100%)' }}
      >
        <div className="container py-3">
          <span
            className="badge mb-3 px-3 py-2"
            style={{ background: 'rgba(224,123,84,0.25)', color: '#e8a07a', borderRadius: 50, fontSize: '0.75rem', letterSpacing: '0.06em' }}
          >
            ✦ HELP CENTER
          </span>
          <h1 className="fw-bold display-5 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Frequently Asked Questions
          </h1>
          <p className="lead mb-0" style={{ opacity: 0.75, maxWidth: 520, margin: '0 auto' }}>
            Everything you need to know about FlavorLand. Can&apos;t find your answer?{' '}
            <Link href="/contact" style={{ color: '#e07b54', textDecoration: 'none', fontWeight: 600 }}>
              Contact us.
            </Link>
          </p>
        </div>
      </div>


      {/* ── FAQ Accordion ── */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {FAQ_DATA.map((section, sIdx) => (
              <div key={sIdx} className="mb-5">

                {/* Section heading */}
                <h4
                  className="fw-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
                >
                  {section.category}
                </h4>

                {/* Items */}
                <div className="d-flex flex-column gap-3">
                  {section.items.map((item, iIdx) => {
                    const key    = `${sIdx}-${iIdx}`;
                    const isOpen = openKey === key;

                    return (
                      <div
                        key={iIdx}
                        className="bg-white rounded-4"
                        style={{
                          border: isOpen ? '1px solid #e07b54' : '1px solid #e8e0d5',
                          overflow: 'hidden',
                          boxShadow: isOpen ? '0 4px 20px rgba(224,123,84,0.12)' : '0 2px 10px rgba(0,0,0,0.05)',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                        }}
                      >
                        {/* Question — click to toggle */}
                        <button
                          onClick={() => toggle(key)}
                          className="w-100 border-0 bg-transparent d-flex align-items-center justify-content-between gap-3 text-start p-4"
                          style={{ cursor: 'pointer' }}
                        >
                          <span
                            className="fw-semibold"
                            style={{ color: '#1a1a1a', fontSize: '0.97rem', lineHeight: 1.4 }}
                          >
                            {item.q}
                          </span>

                          {/* +/− circle */}
                          <div
                            className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                            style={{
                              width: 32, height: 32,
                              background: isOpen ? '#e07b54' : 'rgba(224,123,84,0.1)',
                              color: isOpen ? '#fff' : '#e07b54',
                              fontSize: '1.3rem',
                              fontWeight: 300,
                              lineHeight: 1,
                              transition: 'all 0.25s ease',
                            }}
                          >
                            {isOpen ? '−' : '+'}
                          </div>
                        </button>

                        {/* Answer — shown when open */}
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <div style={{ height: 1, background: '#f0ebe3', marginBottom: 16 }} />
                            <p
                              className="text-muted mb-0"
                              style={{ lineHeight: 1.8, fontWeight: 300, fontSize: '0.95rem' }}
                            >
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}

          </div>
        </div>


        {/* ── Still have questions CTA ── */}
        <div className="row justify-content-center mt-2">
          <div className="col-lg-8">
            <div
              className="rounded-4 text-center text-white p-5"
              style={{ background: 'linear-gradient(135deg, #e07b54 0%, #c45f38 100%)' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>💬</div>
              <h4 className="fw-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Still have questions?
              </h4>
              <p className="mb-4" style={{ opacity: 0.85, fontWeight: 300 }}>
                Our team is here to help. Send us a message and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/contact" className="btn btn-light btn-lg fw-bold" style={{ color: '#e07b54', borderRadius: 50 }}>
                  Contact Us →
                </Link>
                <Link href="/products" className="btn btn-outline-light btn-lg" style={{ borderRadius: 50 }}>
                  Browse Recipes
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}