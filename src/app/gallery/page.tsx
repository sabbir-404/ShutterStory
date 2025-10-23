import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Gallery | ShutterStory",
};

export default function GalleryIndex() {
  // Use images you actually have. Swap these later for real thumbs.
  const cards = [
    {
      href: "/gallery/weddings",
      title: "Weddings",
      desc: "Beautiful wedding stories captured in every frame.",
      // If you add a real thumb later: '/assets/weddings/farabi-tisha/holud/Holud Photo-1.jpg'
      img: "/assets/hero2.jpg",
      alt: "Weddings",
    },
    {
      href: "/gallery/seminars",
      title: "Seminars",
      desc: "Knowledge and learning events documented professionally.",
      img: "/assets/hero3.jpg",
      alt: "Seminars",
    },
    {
      href: "/gallery/concerts",
      title: "Concerts",
      desc: "Music, lights, and energy — captured perfectly.",
      img: "/assets/hero1.jpg",
      alt: "Concerts",
    },
    {
      href: "/gallery/travel",
      title: "Travel",
      desc: "Stories from destinations around the world.",
      img: "/assets/hero2.jpg",
      alt: "Travel",
    },
    {
      href: "/gallery/corporate",
      title: "Corporate",
      desc: "Professional events and business moments captured.",
      img: "/assets/hero3.jpg",
      alt: "Corporate",
    },
    {
      href: "/gallery/other",
      title: "Other",
      desc: "Every special event documented with care.",
      img: "/assets/hero1.jpg",
      alt: "Other Events",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="wedding-hero">
        <div className="hero-overlay">
          <h1>Gallery — Every Moment Captured</h1>
        </div>
      </section>

      {/* Main Albums / Subsections */}
      <section className="wedding-events container">
        <h2>Explore Our Galleries</h2>

        <div className="event-grid">
          {cards.map((c) => (
            <Link key={c.title} href={c.href} className="event-card">
              {/* Use <Image> for perf; set sizes + fixed dims or fill */}
              <div className="event-card-media">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="event-card-img"
                  priority={c.title === "Weddings"}
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
