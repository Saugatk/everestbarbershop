import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/services/ServicesSection';
import { GalleryPreview } from '../components/gallery/GalleryPreview';
import { TrainingPreview } from '../components/training/TrainingPreview';
import { ReviewsSection } from '../components/reviews/ReviewsSection';
import { ContactSection } from '../components/contact/ContactSection';

export function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <ServicesSection />
      <GalleryPreview />
      <TrainingPreview />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
}
