import Brands from "~/components/custom/Brands";
import type { Route } from "./+types/home";
import Hero from "~/components/custom/Hero";
import Howitworks from "~/components/custom/How_it_works";
import Our_services from "~/components/custom/Our_services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <Hero />
      <Howitworks />
      <Our_services />
      <Brands />
    </div>
  );
}
