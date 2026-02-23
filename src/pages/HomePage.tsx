import CategoriesSection from "@/features/categories/CategoriesSection";
import HeroCarousel from "@/features/home/components/HeroCarousel";
import ProductSection from "@/features/products/components/ProductSection";
import { mockProducts } from "@/features/products/data/mockProducts";

function HomePage() {
  return (
    <>
      <CategoriesSection />
      <HeroCarousel />
      <ProductSection
        title="You might Like (Fast Selling)"
        products={mockProducts}
      />

      <ProductSection title="Children Special" products={mockProducts} />

      <ProductSection title="Sky Lights" products={mockProducts} />
      {/* Banner below */}
    </>
  );
}

export default HomePage;
