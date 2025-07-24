import { Linkedin, Facebook, Youtube } from "lucide-react";
import { SiX } from "react-icons/si"; // for X (Twitter) icon
import BlurImage from "./BlurImage";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-3xl py-16 px-4 w-full">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Logo + Tagline */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            {/* Replace with your actual logo */}
            <BlurImage
              src="/resources/assets/logo.png"
              alt="Logo"
              loading="lazy"
              className="absolute ml-[-45px] top-[-15px]"
            />
            <span className="text-2xl font-semibold">Profast</span>
          </div>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-6 border-y border-teal-600/30 py-6 text-sm sm:text-base">
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Coverage
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Pricing
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6">
          <a
            href="#"
            className="bg-[#0077b5] hover:scale-105 transition rounded-full p-3"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-white" />
          </a>
          <a
            href="#"
            className="bg-white hover:scale-105 transition rounded-full p-3"
            aria-label="X"
          >
            <SiX className="text-black" size={20} />
          </a>
          <a
            href="#"
            className="bg-[#1877f2] hover:scale-105 transition rounded-full p-3"
            aria-label="Facebook"
          >
            <Facebook className="text-white" />
          </a>
          <a
            href="#"
            className="bg-[#ff0000] hover:scale-105 transition rounded-full p-3"
            aria-label="YouTube"
          >
            <Youtube className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
