// src/components/PhotoGrid.tsx
"use client";
import Image from "next/image";
export type PhotoItem = { id: string|number; url: string; alt?: string; width?: number; height?: number };

export default function PhotoGrid({ items }: { items: PhotoItem[] }) {
  return (
    <div className="gallery-grid">
      {items.map(p => (
        <figure key={p.id}>
          <Image
            src={p.url}
            alt={p.alt || ""}
            width={p.width || 1200}
            height={p.height || 800}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="gallery-img"
            unoptimized   // ← add this for debugging
          />
        </figure>
      ))}
    </div>
  );
}
