import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Weddings | ShutterStory" };

export default function WeddingsIndex() {
  const cards = [
    {
      href: "/gallery/weddings/farabi-tisha",
      title: "Farabi & Tisha",
      desc: "A beautiful countryside wedding filled with love and laughter.",
      img: "/assets/weddings/farabi-tisha/thumbnail.jpg",
      alt: "Farabi & Tisha Wedding",
    },
    {
      href: "/gallery/weddings/simran-wasim",
      title: "Simran & Wasim",
      desc: "Golden sunsets and ocean breeze — a romantic seaside ceremony.",
      img: "/assets/weddings/simran-wasim/thumbnail.jpg",
      alt: "Simran & Wasim",
    },
    {
      href: "/gallery/weddings/traditional",
      title: "Khushi & Aumit",
      desc: "Rich in culture and family traditions, a timeless union.",
      img: "/assets/weddings/traditional/thumb.jpg",
      alt: "Traditional Wedding",
    },
  ];

  return (
    <>
      {/* Hero (same layout as your HTML) */}
      <section className="wedding-hero">
        <div className="hero-overlay">
          <h1>&quot;Two souls, one story — captured forever.&quot;</h1>
        </div>
      </section>

      {/* Sub Albums */}
      <section className="wedding-events container">
        <h2>Wedding Stories</h2>

        <div className="event-grid">
          {cards.map((c) => (
            <Link key={c.title} href={c.href} className="event-card">
              <div className="event-card-media">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="event-card-img"
                />
              </div>
              <div className="event-info">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
