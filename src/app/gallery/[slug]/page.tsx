import { supabase } from "@/lib/supabase";
import PhotoGrid, { type PhotoItem } from "@/components/PhotoGrid";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: album } = await supabase
    .from("albums")
    .select("title")
    .eq("slug", params.slug)
    .single();
  return { title: `${album?.title ?? "Wedding"} — ShutterStory` };
}

export default async function WeddingAlbumPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // 1) album
  const { data: album } = await supabase
    .from("albums")
    .select("id, title, cover_bg_url")
    .eq("slug", slug)
    .single();

  if (!album) {
    return (
      <section className="container" style={{ padding: "24px 0" }}>
        <h2>Album not found</h2>
      </section>
    );
  }

  // 2) photos, grouped by section
  const { data: holud } = await supabase
    .from("photos")
    .select("id, url, alt, width, height")
    .eq("album_id", album.id)
    .eq("section", "holud")
    .order("created_at", { ascending: true });

  const { data: reception } = await supabase
    .from("photos")
    .select("id, url, alt, width, height")
    .eq("album_id", album.id)
    .eq("section", "reception")
    .order("created_at", { ascending: true });

  const map = (arr: any[]): PhotoItem[] =>
    (arr ?? []).map(p => ({
      id: p.id,
      url: p.url,           // <-- Supabase public URL from DB
      alt: p.alt || album.title,
      width: p.width || 1200,
      height: p.height || 800,
    }));

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: `url('${album.cover_bg_url || "/assets/hero1.jpg"}')` }}
      >
        <div className="overlay">
          <h1>{album.title}</h1>
          <p>"Two souls, one journey, a lifetime of love."</p>
        </div>
      </section>

      <main className="container">
        {holud && holud.length > 0 && (
          <section className="wedding-section">
            <h2>Holud Ceremony</h2>
            <p className="muted">A night of colors, laughter, and blessings.</p>
            <PhotoGrid items={map(holud)} />
          </section>
        )}

        {reception && reception.length > 0 && (
          <section className="wedding-section">
            <h2>Bou Bhat (Reception)</h2>
            <p className="muted">A grand evening to celebrate love with family and friends.</p>
            <PhotoGrid items={map(reception)} />
          </section>
        )}
      </main>
    </>
  );
}
