import React, { useRef } from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useInView } from "motion/react";
import { ThemeSwitcher } from "../ui/theme-switcher";
import { IoSettingsSharp } from "react-icons/io5";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Link } from "react-router";

const Navbar = () => {
  const links = [
    {
      title: "Services",
      to: "/services",
    },
    {
      title: "Coverage",
      to: "/coverage",
    },
    {
      title: "About us",
      to: "/about",
    },
    {
      title: "Pricing",
      to: "/pricing",
    },
    {
      title: "Be a Rider",
      to: "/Be_a_Rider",
    },
  ];

  const main_parents = useRef(null);
  const isInView = useInView(main_parents);
  return (
    <motion.div
      ref={main_parents}
      initial={{
        y: -120,
        opacity: 0,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -120,
      }}
      className="flex justify-between items-center bg-[#ffffff] w-4/5 py-4 mt-8 px-6 rounded-2xl"
    >
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
          <motion.ul
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
            }}
            className="flex gap-x-5 text-xl font-bold text-[#606060]"
          >
            {links.map((data, id) => (
              <li key={id}>
                <Link to={data.to}>{data.title}</Link>
              </li>
            ))}
          </motion.ul>
        </nav>
      </div>
      <div className="flex space-x-4 justify-center items-center">
        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0,
            x: 10,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
          }}
        >
          <Button variant="outline">
            <span>Sign In</span>
          </Button>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0,
            x: 10,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
          }}
        >
          <Button>
            <span>Sign Up</span>
          </Button>
        </motion.div>
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
    </motion.div>
  );
};

export default Navbar;
