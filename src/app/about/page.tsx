// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

const TEAM = [
  { name: 'Maria Santos',   role: 'Head Chef',        emoji: '👩‍🍳', color: '#e07b54' },
  { name: 'James Liu',      role: 'Recipe Developer', emoji: '🧑‍🍳', color: '#2d4a3e' },
  { name: 'Aisha Al-Nour',  role: 'Food Stylist',     emoji: '👨‍🎨', color: '#f0a500' },
  { name: 'Carlos Rivera',  role: 'Nutritionist',     emoji: '🥗',   color: '#4a8bc4' },
];

const VALUES = [
  { icon: '🌍', title: 'Authenticity',   text: 'Every recipe is sourced from real kitchens and home cooks around the world.' },
  { icon: '❤️',  title: 'Passion',        text: 'We believe cooking is an act of love — for yourself, your family, your culture.' },
  { icon: '🎓', title: 'Education',      text: 'We make complex recipes approachable for every skill level.' },
  { icon: '🤝', title: 'Community',      text: 'Food is better when shared. Our community of cooks inspires one another every day.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#faf8f5', minHeight: '100vh' }}>

      {/* ── Hero banner ── */}
      <div className="position-relative" style={{ height: 420 }}>
        <Image
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&q=80"
          alt="Colorful food ingredients flat lay"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.65))' }} />
        <div className="position-absolute bottom-0 start-0 w-100 p-5 text-center text-white">
          <span className="badge mb-3 px-3 py-2" style={{ background: 'rgba(224,123,84,0.8)', borderRadius: 50, fontSize: '0.75rem', letterSpacing: '0.06em' }}>
            ✦ OUR STORY
          </span>
          <h1 className="fw-bold display-4 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            About FlavorLand
          </h1>
          <p className="lead mb-0" style={{ opacity: 0.85, maxWidth: 580, margin: '0 auto' }}>
            A passionate community of food lovers bringing the world&apos;s best recipes to your kitchen.
          </p>
        </div>
      </div>


      {/* ── Mission section ── */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <span className="section-label">✦ Our Mission</span>
              <h2 className="fw-bold mb-4">Food is Love Made Visible</h2>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8, fontWeight: 300 }}>
                FlavorLand was born from a simple belief — great food brings people together.
                We started as a small collection of family recipes and grew into a global platform
                trusted by over 10,000 home cooks worldwide.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8, fontWeight: 300 }}>
                Our team works tirelessly to test every recipe, source authentic ingredients,
                and present each dish with the care and detail it deserves. Whether you&apos;re a
                beginner making your first omelette or a seasoned chef exploring new cuisines —
                FlavorLand is your kitchen companion.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/products" className="btn btn-primary btn-lg">
                  Explore Recipes →
                </Link>
                <Link href="/search" className="btn btn-outline-primary btn-lg">
                  Search Dishes
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80"
                    alt="Chef cooking"
                    width={400}
                    height={260}
                    className="img-fluid rounded-4 w-100"
                    style={{ objectFit: 'cover', height: 200 }}
                  />
                </div>
                <div className="col-6">
                  <Image
                    src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=80"
                    alt="Fresh produce"
                    width={400}
                    height={260}
                    className="img-fluid rounded-4 w-100"
                    style={{ objectFit: 'cover', height: 200 }}
                  />
                </div>
                <div className="col-12">
                  <Image
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80"
                    alt="Kitchen tools"
                    width={800}
                    height={200}
                    className="img-fluid rounded-4 w-100"
                    style={{ objectFit: 'cover', height: 160 }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── Stats ── */}
      <section className="section-sm" style={{ background: '#f0ebe3' }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { v: '10K+', l: 'Happy Cooks',    icon: '👨‍🍳' },
              { v: '5K+',  l: 'Recipes',         icon: '📖' },
              { v: '4.9★', l: 'Average Rating',  icon: '⭐' },
              { v: '15+',  l: 'World Cuisines',  icon: '🌍' },
            ].map(s => (
              <div key={s.l} className="col-6 col-md-3">
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.icon}</div>
                <div className="fw-bold" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#e07b54', lineHeight: 1 }}>
                  {s.v}
                </div>
                <div className="text-muted small mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Values ── */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">✦ What We Believe</span>
            <h2 className="fw-bold">Our Core Values</h2>
          </div>

          <div className="row g-4">
            {VALUES.map(v => (
              <div key={v.title} className="col-sm-6 col-lg-3">
                <div className="card h-100 p-4 text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{v.icon}</div>
                  <h5 className="fw-bold mb-2">{v.title}</h5>
                  <p className="text-muted small mb-0" style={{ lineHeight: 1.7 }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Team ── */}
      <section className="section-sm" style={{ background: '#f0ebe3' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">✦ Meet the People</span>
            <h2 className="fw-bold">Behind FlavorLand</h2>
            <p className="text-muted mt-2">The passionate team that makes every recipe shine</p>
          </div>

          <div className="row g-4 justify-content-center">
            {TEAM.map(member => (
              <div key={member.name} className="col-6 col-md-3">
                <div className="card h-100 p-4 text-center">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                    style={{ width: 80, height: 80, background: member.color + '18', fontSize: '2.2rem' }}
                  >
                    {member.emoji}
                  </div>
                  <h6 className="fw-bold mb-1">{member.name}</h6>
                  <p className="text-muted small mb-0">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Full-width image ── */}
      <section className="section">
        <div className="container">
          <div className="position-relative rounded-4 overflow-hidden" style={{ height: 360 }}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
              alt="Restaurant table setting"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="position-absolute w-100 h-100" style={{ background: 'rgba(0,0,0,0.45)' }} />
            <div className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white text-center p-4">
              <h2 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}>
                Ready to Explore the World Through Food?
              </h2>
              <Link href="/products" className="btn btn-primary btn-lg">
                Start Cooking Today →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}