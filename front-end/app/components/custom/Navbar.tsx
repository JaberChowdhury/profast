import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
import { Scale } from "lucide-react";
import { ThemeSwitcher } from "../ui/theme-switcher";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#ffffff] w-4/5 py-4 mt-8 px-6">
      <div className="flex justify-center items-center relative">
        <img
          src="/resources/assets/logo.png"
          alt="Logo"
          loading="lazy"
          className="absolute ml-[-45px] top-[-15px]"
        />
        <p className="text-2xl font-bold pl-10">Profast</p>
      </div>
      <div>
        <nav>
          <ul className="flex gap-x-5 text-xl font-bold text-[#606060]">
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/Coverage">Coverage</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/Pricing">Pricing</a>
            </li>
            <li>
              <a href="/register">Be a Rider</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <div>
          <Button variant="outline">
            <span>Sign In</span>
          </Button>
        </div>
        <div>
          <Button>
            <span>Sign Up</span>
          </Button>
        </div>
        <motion.div
          className="p-5 rounded-full bg-black"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowRight className="text-lime-300 text-xl rotate-[-45deg]" />
        </motion.div>
        <Dialog>
          <DialogTrigger asChild>
            {/* <Button type="button" aria-label="Open theme switcher"></Button>{" "} */}
            <IoSettingsSharp className="text-3xl text-black _animate-spin " />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
            </DialogHeader>
            <div className="w-full flex justify-between items-center">
              <div>Change theme </div>
              <ThemeSwitcher />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
