"use client";

import Image from "next/image";

export type PhotoItem = {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function PhotoGrid({ items }: { items: PhotoItem[] }) {
  if (!items || items.length === 0) {
    return <p className="muted">No photos available.</p>;
  }

  return (
    <div className="gallery-grid">
      {items.map((p) => (
        <figure key={p.id}>
          <Image
            src={p.url}
            alt={p.alt || ""}
            width={p.width || 1200}
            height={p.height || 800}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="gallery-img"
          />
        </figure>
      ))}
    </div>
  );
}
