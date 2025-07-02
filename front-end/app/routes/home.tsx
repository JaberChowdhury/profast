import Brands from "~/components/custom/Brands";
import type { Route } from "./+types/home";
import Hero from "~/components/custom/Hero";
import Howitworks from "~/components/custom/How_it_works";
import Our_services from "~/components/custom/Our_services";
import Our_servicesv2 from "~/components/custom/Our_servicesv2";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    margin: "0px 100px -50px 0px",
  });
  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <Hero />
      <Howitworks />
      <Our_services />
      <Brands />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
        className="w-4/5 border-t-3 border-t-slate-400 border-dashed my-9"
      />
      <Our_servicesv2 />
    </div>
  );
}
