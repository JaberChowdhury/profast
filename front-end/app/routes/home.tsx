import Brands from "~/components/custom/Brands";
import type { Route } from "./+types/home";
import Hero from "~/components/custom/Hero";
import Howitworks from "~/components/custom/How_it_works";
import Our_services from "~/components/custom/Our_services";
import Our_servicesv2 from "~/components/custom/Our_servicesv2";
import { useRef } from "react";
import HorzintalSeparator from "~/components/custom/HorzintalSeparator";
import Invitation from "~/components/custom/Invitation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-28">
      <Hero />
      <div className="md:my-24">
        <Howitworks />
      </div>
      <HorzintalSeparator />
      <Our_services />
      <Brands />
      <Our_servicesv2 />
      <HorzintalSeparator  />
      <Invitation />
    </div>
  );
}
