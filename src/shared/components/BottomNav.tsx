import { NavLink } from "react-router-dom";
import { BsShop, BsCart4 } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { RiHome9Line } from "react-icons/ri";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full sm:hidden z-50">
      {/* Full White Background Strip */}
      <div className="bg-[#f1f5eb] pt-3 pb-4">
        {/* Centered Green Pill */}
        <div className="w-[92%] mx-auto bg-[#0f4c45] rounded-2xl px-6 py-3 flex justify-between items-center">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isActive
                  ? "bg-white text-[#0f4c45]"
                  : "text-white hover:bg-[#0c3e38]"
              }`
            }
          >
            <RiHome9Line size={22} />
          </NavLink>

          {/* Shop */}
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `relative flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isActive
                  ? "bg-white text-[#0f4c45]"
                  : "text-white hover:bg-[#0c3e38]"
              }`
            }
          >
            <BsShop size={20} />
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isActive
                  ? "bg-white text-[#0f4c45]"
                  : "text-white hover:bg-[#0c3e38]"
              }`
            }
          >
            <BsCart4 size={16} />

            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-[0_0_0_3px_#0f4c45]">
              8
            </span>
          </NavLink>

          {/* Account */}
          <NavLink
            to="/account"
            className={({ isActive }) =>
              `relative flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isActive
                  ? "bg-white text-[#0f4c45]"
                  : "text-white hover:bg-[#0c3e38]"
              }`
            }
          >
            <FaUserLarge size={18} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
