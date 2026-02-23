import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsLightningFill, BsCart4, BsSearch } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";

function Header() {
  const [cartCount] = useState(8);

  return (
    <header className="sticky top-0 z-50 bg-[#f1f5eb] px-4 pt-6 pb-8 md:pt-3 md:pb-3">
      {/* HEADER CARD */}
      <div className="relative max-w-400 mx-auto bg-[#0f4c45] rounded-xl shadow-lg px-4 md:px-6 py-2 md:py-6">
        {/* ================= MOBILE LAYOUT ================= */}
        <div className="flex items-center justify-between md:hidden">
          {/* Menu */}
          <button type="button" title="Menu" className="text-white text-2xl">
            <BiMenu />
          </button>

          {/* Cart */}
          <button className="relative w-10 h-10 rounded-full bg-white text-[#0f4c45] flex items-center justify-center shadow-sm">
            <BsCart4 className="text-md" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-[0_0_0_3px_#0f4c45]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Center Logo (Absolute Centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-4">
            <img
              src="/assets/logo/app-logo.png"
              alt="Sree Vignesh Pyro Park"
              className="h-22.5 object-contain"
            />
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden md:flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo/app-logo.png"
              alt="Sree Vignesh Pyro Park"
              className="h-11 object-contain cursor-pointer"
            />
          </div>

          {/* SEARCH */}
          <div className="flex flex-1 mx-6 relative">
            <input
              type="text"
              placeholder="Search crackers, gift boxes, sky shots..."
              className="w-full bg-[#e6ebe6] rounded-full px-6 py-3 pr-14 text-sm outline-none"
            />

            <button
              title="Search"
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0f4c45] rounded-full flex items-center justify-center shadow-sm"
            >
              <BsSearch className="text-white text-sm" />
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-green-200 whitespace-nowrap tracking-wide">
              <BsLightningFill className="text-yellow-400 text-md" />
              Order now & get it fast
            </span>

            <button className="relative w-10 h-10 rounded-full bg-white text-[#0f4c45] flex items-center justify-center shadow-sm">
              <BsCart4 className="text-md" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-[0_0_0_3px_#0f4c45]">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              title="Account"
              type="button"
              className="w-10 h-10 rounded-full bg-white text-[#0f4c45] flex items-center justify-center shadow-sm"
            >
              <FaUserLarge className="text-md" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
