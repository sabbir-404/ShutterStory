import FarabiTishaClient from "./FarabiTishaClient";
import { supabase } from "@/lib/supabase";

export const metadata = { title: "Farabi & Tisha Wedding — ShutterStory" };

export default async function Page() {
  const { data: album } = await supabase
    .from("albums")
    .select("title, cover_bg_url")
    .eq("slug", "farabi-tisha")
    .single();

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: `url('${album?.cover_bg_url || "/assets/hero1.jpg"}')` }}
      >
        <div className="overlay">
          <h1>{album?.title ?? "Wedding"}</h1>
        </div>
      </section>

      <FarabiTishaClient />
    </>
  );
}
