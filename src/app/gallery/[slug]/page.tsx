import Image from 'next/image';

type Params = { params: { slug: string } };

export default async function AlbumPage({ params }: Params) {
  const { slug } = params;

  // For now, mock album meta + photos.
  // Later you'll fetch from Supabase by `slug`.
  const album = {
    title: slug.replace('-', ' ').toUpperCase(),
    // Use any local image you have as the hero background for now:
    cover_bg_url: '/assets/hero1.jpg',
  };

  // Empty list for now (you’ll fetch from DB later)
  const photos: { id: string; url: string; alt?: string }[] = [];

  return (
    <>
      <section className="hero" style={{ position:'relative', height:'50vh' }}>
        <Image src={album.cover_bg_url} alt={album.title} fill className="slide-img" priority />
        <div className="hero-overlay">
          <div className="hero-caption container">
            <h1>{album.title}</h1>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding:'24px 0' }}>
        {photos.length === 0 ? (
          <p>Photos will appear here once the database connection is added.</p>
        ) : (
          <div className="grid" style={{ gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))' }}>
            {photos.map(p => (
              <figure key={p.id}>
                <Image src={p.url} alt={p.alt || ''} width={1200} height={800} sizes="(max-width:768px) 100vw, 33vw" />
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
