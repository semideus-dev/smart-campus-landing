import Apps from "@/components/applications";
import Features from "@/components/features";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import { DevTeam } from "@/components/ui/dev-team";
import App from "next/app";
import Image from "next/image";

export default function Home() {
  const testimonials = [
    {
      quote: "Planned the entire project and made APIs for the IoT frameworks.",
      name: "Ashwath Soni",
      designation: "Team Leader",
      src: "/assets/ashwath.jpeg",
    },
    {
      quote:
        "Made backend APIs using Ninja and Django along with microservies and deployments on Railway.",
      name: "Parth Kapoor",
      designation: "Backend Developer",
      src: "/assets/parth.jpeg",
    },
    {
      quote:
        "Designed and implemented the entire frontend using Next.js, ShadCN UI and Tailwind CSS along with API integration",
      name: "Gurshabad Singh",
      designation: "Frontend Developer",
      src: "/assets/gurshabad.jpeg",
    },
    {
      quote:
        "Designed and implemented the hardware connections and IoT frameworks with real-time data.",
      name: "Ajay Kattal",
      designation: "IoT Expert",
      src: "/assets/ajay.jpeg",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <TechStack />
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <h1 className="text-6xl font-extrabold tracking-wide my-5 uppercase">
          Development Team
        </h1>
        <DevTeam testimonials={testimonials} />
      </div>
      <Features />
      <Apps />
    </main>
  );
}
