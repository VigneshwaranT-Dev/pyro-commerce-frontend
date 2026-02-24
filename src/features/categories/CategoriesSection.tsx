import { categories } from "./data";
import CategoryCard from "./components/CategoryCard";
import { ArrowRight } from "lucide-react";

function CategoriesSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-4 mt-1">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}

        {/* See All Card */}
        <div className="bg-[#b7e27f] rounded-2xl p-6 flex flex-col items-center justify-center text-[#0f4c45] font-semibold text-lg cursor-pointer hover:shadow-md transition">
          <ArrowRight className="mb-2" />
          See all
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
