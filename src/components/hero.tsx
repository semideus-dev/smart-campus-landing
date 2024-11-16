import Link from "next/link";
import { Button } from "./ui/button";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/star-background";

export default function Hero() {
  return (
    <div className="h-screen flex text-center flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold tracking-wide uppercase">
        Smart Campus
      </h1>
      <span className="text-muted-foreground px-10 my-4">
        Building smarter communities where technology and education thrive
        together
      </span>
      <div className="flex space-x-2">
        <Link href="https://smart-campus-tiet.vercel.app/">
          <Button>Get Started</Button>
        </Link>
        <Link href={"#tech"}>
          <Button variant="outline">Explore</Button>
        </Link>
      </div>
      <div className="-z-10">
        <ShootingStars />
        <StarsBackground starDensity={0.0005} />
      </div>
    </div>
  );
}
