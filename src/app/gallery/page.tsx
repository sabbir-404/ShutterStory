import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata = { title: "Weddings | ShutterStory" };

export default async function WeddingsIndex() {
  const { data: albums } = await supabase
    .from("albums")
    .select("slug, title, cover_thumb_url")
    .eq("category", "weddings")
    .order("created_at", { ascending: false });

  return (
    <>
      <section className="wedding-hero">
        <div className="hero-overlay"><h1>&quot;Two souls, one story — captured forever.&quot;</h1></div>
      </section>

      <section className="wedding-events container">
        <h2>Wedding Stories</h2>
        <div className="event-grid">
          {(albums ?? []).map(a => (
            <Link key={a.slug} href={`/gallery/weddings/${a.slug}`} className="event-card">
              <div className="event-card-media">
                <Image
                  src={a.cover_thumb_url || "/assets/hero1.jpg"}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="event-card-img"
                />
              </div>
              <div className="event-info"><h3>{a.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
