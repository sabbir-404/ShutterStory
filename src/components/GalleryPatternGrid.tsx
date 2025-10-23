"use client";
import Image from "next/image";
import { useMemo } from "react";

function buildFileName(pattern: string, i: number) {
  // Replace {i} in e.g. "Holud Photo-{i}.jpg"
  return pattern.replace("{i}", String(i));
}

export default function GalleryPatternGrid({
  basePath, // e.g. "/assets/weddings/farabi-tisha/holud/"
  count,    // e.g. 62
  pattern,  // e.g. "Holud Photo-{i}.jpg"
  caption,  // optional prefix for alt text
}: {
  basePath: string;
  count: number;
  pattern: string;
  caption?: string;
}) {
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, idx) => {
      const n = idx + 1;
      const file = buildFileName(pattern, n);
      // encode spaces in filenames
      const url = `${basePath}${encodeURIComponent(file)}`;
      return { id: n, url, alt: caption ? `${caption} ${n}` : file };
    });
  }, [basePath, count, pattern, caption]);

  return (
    <div className="gallery-grid">
      {items.map((it) => (
        <figure key={it.id}>
          <Image
            src={it.url}
            alt={it.alt}
            width={1400}
            height={933}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="gallery-img"
          />
        </figure>
      ))}
    </div>
  );
}
