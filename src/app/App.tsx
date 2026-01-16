import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { PlansSection } from "./components/plans-section";
import { ProductsSection } from "./components/products-section";
import { ScheduleSection } from "./components/schedule-section";
import { Footer } from "./components/footer";
import backgroundImage from "../assets/gym-bg.png";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <HeroSection backgroundImage={backgroundImage} />
      <PlansSection />
      <ProductsSection />
      <ScheduleSection />
      <Footer />
    </div>
  );
}
