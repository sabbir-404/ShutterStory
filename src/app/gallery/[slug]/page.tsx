import { supabase } from "@/lib/supabase";
import PhotoGrid, { type PhotoItem } from "@/components/PhotoGrid";

interface PhotoRow {
  id: number;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export default async function WeddingAlbumPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data: album } = await supabase
    .from("albums")
    .select("id, title, cover_bg_url")
    .eq("slug", slug)
    .single();

  if (!album) {
    return <section className="container">Album not found</section>;
  }

  const { data: holud } = await supabase
    .from("photos")
    .select("id, url, alt, width, height")
    .eq("album_id", album.id)
    .eq("section", "holud");

  const { data: reception } = await supabase
    .from("photos")
    .select("id, url, alt, width, height")
    .eq("album_id", album.id)
    .eq("section", "reception");

  const map = (arr: PhotoRow[] | null): PhotoItem[] =>
    (arr ?? []).map((p) => ({
      id: String(p.id),
      url: p.url,
      alt: p.alt || album.title,
      width: p.width || 1200,
      height: p.height || 800,
    }));

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: `url('${album.cover_bg_url}')` }}
      >
        <div className="overlay">
          <h1>{album.title}</h1>
        </div>
      </section>

      <main className="container">
        {holud && holud.length > 0 && (
          <section>
            <h2>Holud</h2>
            <PhotoGrid items={map(holud)} />
          </section>
        )}
        {reception && reception.length > 0 && (
          <section>
            <h2>Reception</h2>
            <PhotoGrid items={map(reception)} />
          </section>
        )}
      </main>
    </>
  );
}
