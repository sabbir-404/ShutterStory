import Link from "next/link";

export const metadata = { title: "Gallery | ShutterStory" };

const tiles = [
  { href: "/gallery/weddings",  title: "Weddings",  desc: "Beautiful wedding stories." },
  { href: "/gallery/seminars",  title: "Seminars",  desc: "Knowledge & learning events." },
  { href: "/gallery/concerts",  title: "Concerts",  desc: "Music, lights, and energy." },
  { href: "/gallery/travel",    title: "Travel",    desc: "Stories from destinations." },
  { href: "/gallery/corporate", title: "Corporate", desc: "Professional, business moments." },
  { href: "/gallery/other",     title: "Other",     desc: "Every special event." },
];

export default function GalleryHome() {
  return (
    <>
      <section className="wedding-hero">
        <div className="hero-overlay">
          <h1>Gallery — Every Moment Captured</h1>
        </div>
      </section>

      <section className="wedding-events container">
        <h2>Explore Our Galleries</h2>
        <div className="event-grid">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="event-card">
              {/* Use any fallback covers you have locally or later swap to supabase */}
              <img src="/assets/hero1.jpg" alt={t.title} className="event-card-img" />
              <div className="event-info">
                <h3>{t.title}</h3>
                <p className="muted">{t.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
