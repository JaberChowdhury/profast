import { Button } from "~/components/ui/button";

import type { Route } from "./+types/home";
import Hero from "~/components/custom/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-center">
      <Hero />
    </div>
  );
}
