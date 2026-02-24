import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  stock: number;
  description?: string;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

function QuickViewModal({ product, onClose }: Props) {
  const [qty, setQty] = useState(0);
  const isOutOfStock = product?.stock === 0;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!product) return null;

  const images = product.images || [product.image];

  return createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        className="select-none fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-white w-full max-w-6xl rounded-t-3xl sm:rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 cursor-pointer sm:right-6 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#eef5ea] flex items-center justify-center text-[#0f4c45] hover:bg-[#e4f1db] transition"
          >
            <IoClose size={23} />
          </button>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 p-4 sm:p-8 md:p-12">
            {/* LEFT SIDE */}
            <div>
              {/* MOBILE CAROUSEL */}
              <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="snap-center flex-shrink-0 w-full bg-[#eef5ea] rounded-2xl p-6 flex items-center justify-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-[360px] max-w-[280px] object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>

              {/* DESKTOP IMAGE */}
              <div className="hidden md:block relative bg-[#eef5ea] rounded-2xl p-10 flex items-center justify-center">
                {product.discount && (
                  <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-br from-[#0f4c45] to-[#143d66] text-white flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.25)] ring-4 ring-white/60">
                    <span className="text-3xl font-bold leading-none">
                      {product.discount}%
                    </span>
                    <span className="text-xs tracking-widest uppercase mt-1 opacity-90">
                      OFF
                    </span>
                  </div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[360px] object-contain"
                />
              </div>

              {/* DESKTOP THUMBNAILS */}
              <div className="hidden md:flex justify-center gap-4 mt-6">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="border border-[#0f4c45] rounded-xl p-3 cursor-pointer"
                  >
                    <img alt="" src={img} className="h-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                Premium Crackers Collection
              </p>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0f4c45] leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2 sm:mt-3 text-xs sm:text-sm">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-600">4.5 Rating (15 reviews)</span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0f4c45]">
                  ₹{product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-gray-400 text-sm sm:text-xl line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <div className="border-t border-gray-200 my-5 sm:my-8" />

              {/* Buttons */}
              <div className="mt-2">
                {isOutOfStock ? (
                  <p className="text-red-500 font-medium text-sm">
                    Out of stock
                  </p>
                ) : qty === 0 ? (
                  <button
                    onClick={() => setQty(1)}
                    className="
                        w-full sm:w-auto
                        py-3 sm:py-4
                        px-6 sm:px-10
                        text-sm sm:text-base
                        bg-[#e4f1db]
                        text-[#0f4c45]
                        rounded-2xl
                        font-semibold
                        transition
                        shadow-sm
                        hover:bg-[#dbeccb]
                    "
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {/* Quantity Selector */}
                    <div
                      className="
                        w-full sm:w-auto
                        h-12 sm:h-14
                        flex items-center justify-between
                        bg-[#d6eac9]
                        border border-[#c4d9b7]
                        rounded-2xl
                        px-6
                        min-w-[180px]
                        "
                    >
                      <button
                        type="button"
                        onClick={() => setQty(Math.max(0, qty - 1))}
                        className="
                            w-6 h-6 sm:w-8 sm:h-8
                            bg-[#0f4c45]
                            hover:bg-[#0c3e38]
                            text-white
                            rounded-full
                            flex items-center justify-center
                            transition
                        "
                      >
                        <FiMinus className="pointer-events-none" />
                      </button>

                      <span className="text-base sm:text-lg font-semibold text-[#0f4c45]">
                        {qty}
                      </span>

                      <button
                        type="button"
                        onClick={() => setQty(qty + 1)}
                        className="
                            w-6 h-6 sm:w-8 sm:h-8
                            bg-[#0f4c45]
                            hover:bg-[#0c3e38]
                            text-white
                            rounded-full
                            flex items-center justify-center
                            transition
                        "
                      >
                        <FiPlus className="pointer-events-none" />
                      </button>
                    </div>

                    {/* Final Add To Cart Button */}
                    <button
                      className="
                        w-full sm:w-auto
                        py-3 sm:py-4
                        px-6 sm:px-10
                        text-sm sm:text-base
                        bg-[#0f4c45]
                        text-white
                        rounded-2xl
                        font-semibold
                        transition
                        shadow-md
                        cursor-pointer
                        hover:bg-[#0c3e38]
                        "
                    >
                      Add {qty} to Cart
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
                <button className="hover:text-[#0f4c45] cursor-pointer">
                  Add to Wishlist
                </button>
              </div>

              <div className="border-t border-gray-200 my-5 sm:my-8" />

              <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                <p>
                  <span className="font-medium text-[#0f4c45]">
                    Product Id:
                  </span>{" "}
                  CRK{product.id}
                </p>
                <p>
                  <span className="font-medium text-[#0f4c45]">Category:</span>{" "}
                  Festival Crackers
                </p>
              </div>

              <p className="mt-4 sm:mt-6 text-xs sm:text-base text-gray-600 leading-relaxed">
                {product.description ||
                  "Premium quality festive crackers with vibrant lighting effects and safe ignition technology. Perfect for Diwali and celebration events."}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}

export default QuickViewModal;
