import type { Category } from "../data";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  return (
    <div
      className=" bg-[#e4f1db]
        border border-[#cddfbf]
        hover:bg-[#dbeccb]
        hover:border-[#bfcfae] rounded-2xl px-5 py-4 min-h-[130px] flex flex-col justify-between relative hover:shadow-md transition cursor-pointer"
    >
      {/* TEXT BLOCK */}
      <div>
        <h3 className="text-[#0f4c45] text-sm sm:text-lg font-semibold leading-tight">
          {category.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
          {category.subtitle}
        </p>
      </div>

      {/* IMAGE */}
      <div className="absolute bottom-3 right-3">
        <img
          src={category.image}
          alt={category.title}
          className="h-14 object-contain"
        />
      </div>
    </div>
  );
}

export default CategoryCard;
