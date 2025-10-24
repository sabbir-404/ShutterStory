"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import PhotoGrid, { type PhotoItem } from "@/components/PhotoGrid";

export default function FarabiTishaClient() {
  const [holud, setHolud] = useState<PhotoItem[] | null>(null);
  const [reception, setReception] = useState<PhotoItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function run() {
      // 1) get album id for this slug
      const { data: album, error: albumErr } = await supabase
        .from("albums")
        .select("id, title")
        .eq("slug", "farabi-tisha")
        .single();

      if (albumErr || !album) {
        setError("Album not found");
        return;
      }

      // 2) fetch photos by section
      const { data: holudRows } = await supabase
        .from("photos")
        .select("id, url, alt, width, height")
        .eq("album_id", album.id)
        .eq("section", "holud")
        .order("created_at", { ascending: true });

      const { data: receptionRows } = await supabase
        .from("photos")
        .select("id, url, alt, width, height")
        .eq("album_id", album.id)
        .eq("section", "reception")
        .order("created_at", { ascending: true });

      const map = (arr: any[] | null): PhotoItem[] =>
        (arr ?? []).map((p) => ({
          id: p.id,
          url: p.url,          // <-- Supabase public URL
          alt: p.alt ?? album.title,
          width: p.width ?? 1200,
          height: p.height ?? 800,
        }));

      setHolud(map(holudRows ?? []));
      setReception(map(receptionRows ?? []));
    }
    run().catch((e) => setError(String(e)));
  }, []);

  if (error) return <p className="muted">{error}</p>;

  return (
    <main className="container">
      {/* Holud */}
      {holud && holud.length > 0 && (
        <section className="wedding-section">
          <h2>Holud Ceremony</h2>
          <p className="muted">A night of colors, laughter, and blessings.</p>
          <PhotoGrid items={holud} />
        </section>
      )}

      {/* Reception */}
      {reception && reception.length > 0 && (
        <section className="wedding-section">
          <h2>Bou Bhat (Reception)</h2>
          <p className="muted">A grand evening to celebrate love with family and friends.</p>
          <PhotoGrid items={reception} />
        </section>
      )}
    </main>
  );
}
