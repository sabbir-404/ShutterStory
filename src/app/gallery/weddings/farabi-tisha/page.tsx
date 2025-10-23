// SERVER COMPONENT (no "use client" here)
import FarabiTishaClient from "./FarabiTishaClient";

export const metadata = { title: "Farabi & Tisha Wedding — ShutterStory" };

export default function FarabiTishaPage() {
  return (
    <>
      {/* HERO HEADER */}
      <section
        className="hero-banner"
        style={{ backgroundImage: "url('/assets/weddings/farabi-tisha/thumbnail.jpg')" }}
      >
        <div className="overlay">
          <h1>Farabi &amp; Tisha</h1>
          <p>&quot;Two souls, one journey, a lifetime of love.&quot;</p>
        </div>
      </section>

      {/* Client-only part goes below */}
      <FarabiTishaClient />
    </>
  );
}
