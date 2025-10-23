import HeroSlider from '@/components/HeroSlider';
import FeaturedAlbums from '@/components/FeaturedAlbums';
import Achievements from '@/components/Achievements';
import AboutSection from '@/components/AboutSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider
        slides={[
          { src: '/assets/hero1.jpg', alt: 'Hero 1' },
          { src: '/assets/hero2.jpg', alt: 'Hero 2' },
          { src: '/assets/hero3.jpg', alt: 'Hero 3' },
        ]}
        captionTitle="Moments. Light. Story."
        captionSubtitle="Photography by Sabbir Islam Alvi — capturing life one frame at a time."
      />
      <FeaturedAlbums />
      <Achievements />
      <AboutSection />
    </>
  );
}
