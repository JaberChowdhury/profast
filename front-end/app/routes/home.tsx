import Brands from "~/components/custom/Brands";
import type { Route } from "./+types/home";
import Hero from "~/components/custom/Hero";
import Howitworks from "~/components/custom/How_it_works";
import Our_services from "~/components/custom/Our_services";
import Our_servicesv2 from "~/components/custom/Our_servicesv2";
import HorzintalSeparator from "~/components/custom/HorzintalSeparator";
import Invitation from "~/components/custom/Invitation";
import Customer_review from "~/components/custom/Customer_review";
import Faq from "~/components/custom/Faq";
import Footer from "~/components/custom/Footer";

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
      <Howitworks />
      <HorzintalSeparator />
      <Our_services />
      <Brands />
      <Our_servicesv2 />
      <HorzintalSeparator />
      <Invitation />
      <Customer_review />
      <Faq />
      <Footer />
    </div>
  );
}
