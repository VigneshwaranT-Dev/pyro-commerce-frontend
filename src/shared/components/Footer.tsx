import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiMap, BiPhone, BiEnvelope } from "react-icons/bi";

function Footer() {
  return (
    <footer className="relative bg-[#0c4a4a] text-gray-200 rounded-xl mx-4 mt-6 overflow-hidden mb-4">
      {/* Geometric overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:260px_260px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-10 grid md:grid-cols-[2fr_1fr_1fr] gap-12 text-center md:text-left">
        {/* LEFT */}
        <div className="md:ml-12">
          <img
            src="/assets/logo/app-logo.png"
            alt="Sree Vignesh Pyro Park"
            className="h-40 md:h-60 mx-auto md:mx-0 mb-4"
          />

          <p className="text-sm md:text-base text-green-100 max-w-[420px] mx-auto md:mx-0 leading-relaxed">
            Sree Vignesh Pyro Park is a trusted direct factory outlet for
            premium festive crackers, sparklers, sky shots, and gift boxes. We
            are committed to delivering quality fireworks at the best value for
            your celebrations.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button
              type="button"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            >
              <BsFacebook />
            </button>
            <button
              type="button"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            >
              <BsInstagram />
            </button>
            <button
              type="button"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            >
              <BsWhatsapp />
            </button>
          </div>
        </div>

        {/* CENTER */}
        <div className="md:mt-20">
          <h4 className="text-white font-semibold mb-4 text-sm md:text-base">
            Site Map
          </h4>
          <ul className="space-y-3 text-sm text-green-100">
            <li>Home</li>
            <li>Shop</li>
            <li>Categories</li>
            <li>Offers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="md:mt-20">
          <h4 className="text-white font-semibold mb-4 text-sm md:text-base">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-green-100">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <BiMap />
              Sivakasi, Tamil Nadu, India
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <BiPhone />
              +91 98765 43210
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <BiEnvelope />
              support@sreevigneshpyropark.com
            </li>
          </ul>
        </div>
      </div>

      {/* SAFETY SECTION */}
      {/* SAFETY SECTION */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-12 mt-12 mb-10">
        <h5 className="text-green-100 font-semibold text-base">
          Safety Guidelines:
        </h5>

        <p className="text-green-200 text-sm leading-relaxed max-w-[1100px]">
          Fireworks should always be handled with care and used strictly
          according to the instructions provided with each product. Store
          crackers in a cool, dry place away from heat sources and open flames.
          Use fireworks only in open outdoor areas under adult supervision. Keep
          them out of reach of children and never attempt to reuse or modify
          damaged items. Celebrate responsibly — your safety is our priority.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#d9a441] text-[#0c4a4a] text-center py-3 text-xs md:text-sm">
        © 2026 Sree Vignesh Pyro Park. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
