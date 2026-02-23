import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  stock: number;
}

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const [qty, setQty] = useState(0);
  const isOutOfStock = product.stock === 0;

  return (
    <div
      className="
        min-h-[360px] sm:min-h-[420px]
        flex flex-col justify-between
        bg-[#e4f1db]
        border border-[#cddfbf]
        rounded-xl sm:rounded-2xl
        p-4 sm:p-6
        relative
        hover:bg-[#dbeccb]
        hover:border-[#bfcfae]
        hover:shadow-md
        transition-all duration-300 ease-in-out
        group
    "
    >
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-5 left-5 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow-sm">
          {product.discount}% OFF
        </span>
      )}

      {/* Quick View */}
      <button
        type="button"
        aria-label="Quick view"
        className="absolute top-5 right-5
                  w-10 h-10
                  rounded-full
                  bg-[#f1f8ec]
                  hover:bg-[#e3f0da]
                  shadow-[0_4px_12px_rgba(15,76,69,0.08)]
                  flex items-center justify-center
                  text-[#0f4c45]
                  opacity-0 group-hover:opacity-100
                  transition-all duration-200
                  cursor-pointer"
      >
        <BsSearch />
      </button>

      <div className="mt-6 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-20 sm:h-32 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 flex-1 flex flex-col items-center text-center">
        <h3 className="text-[#0f4c45] font-semibold text-base sm:text-base sm:text-lg h-[48px] sm:h-[56px] flex items-center justify-center">
          {product.name}
        </h3>

        <p className="text-sm text-gray-400 mt-1 h-[20px]">
          {product.subtitle}
        </p>

        <div className="flex items-center gap-2 mt-3 h-[32px]">
          <span className="text-base sm:text-lg sm:text-2xl font-bold text-[#0f4c45]">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Action Section */}
      <div className="mt-4">{/* your button / qty here */}</div>

      {/* Action */}
      <div className="mt-6">
        {isOutOfStock ? (
          <p className="text-center text-red-500 font-medium text-sm h-10 sm:h-12 flex items-center justify-center">
            Out of stock
          </p>
        ) : qty === 0 ? (
          <button
            type="button"
            onClick={() => setQty(1)}
            className="
              w-full
              h-10 sm:h-12
              bg-[#cfe6c2]
              hover:bg-[#bdd8ae]
              rounded-2xl
              font-medium
              text-[#0f4c45]
              transition-all duration-200
            "
          >
            Add to Cart
          </button>
        ) : (
          <div
            className="
              w-full
              h-10 sm:h-12
              flex items-center justify-between
              bg-[#d6eac9]
              border border-[#c4d9b7]
              rounded-2xl
              px-4
            "
          >
            <button
              type="button"
              title="remvFromCart"
              onClick={() => setQty(qty - 1)}
              className="
                w-7 h-7 sm:w-9 sm:h-9
                bg-[#0f4c45]
                hover:bg-[#0c3e38]
                text-white
                rounded-full
                flex items-center justify-center
                transition-all duration-200
              "
            >
              <FiMinus className="pointer-events-none" />
            </button>

            <span className="text-base sm:text-lg font-semibold text-[#0f4c45]">
              {qty}
            </span>

            <button
              type="button"
              title="addToCart"
              onClick={() => setQty(qty + 1)}
              className="
                w-7 h-7 sm:w-9 sm:h-9
                bg-[#0f4c45]
                hover:bg-[#0c3e38]
                text-white
                rounded-full
                flex items-center justify-center
                transition-all duration-200
              "
            >
              <FiPlus className="pointer-events-none" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
