import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <div
      id="tech"
      className="h-screen flex flex-col items-center space-y-8 justify-center"
    >
      <h1 className="text-6xl font-extrabold tracking-wide my-5 uppercase">
        Tech Stack
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-2 bg-muted-foreground/50 rounded-xl">
          <Icon icon="cib:next-js" fontSize={100} />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-green-600 border-2 bg-green-600/10 rounded-xl">
          <Icon icon="catppuccin:django" fontSize={100} />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-pink-600 border-2 bg-pink-600/10 rounded-xl">
          <Icon
            icon="game-icons:ninja-star"
            fontSize={100}
            className="text-pink-600"
          />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-indigo-600 border-2 bg-indigo-600/10 rounded-xl">
          <Icon
            icon="ic:outline-sensors"
            fontSize={100}
            className="text-indigo-600"
          />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-purple-600 border-2 bg-purple-600/10 rounded-xl">
          <Icon
            icon="devicon:railway"
            fontSize={100}
            className="text-purple-600"
          />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-2 bg-muted-foreground/50 rounded-xl">
          <Icon icon="ri:vercel-fill" fontSize={100} />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-blue-600 border-2 bg-blue-600/10 rounded-xl">
          <Icon icon="devicon:postgresql" fontSize={100} />
        </div>
        <div className="p-8 hover:scale-105 duration-200 transtion-all cursor-pointer border-red-600 border-2 bg-red-600/10 rounded-xl">
          <Icon icon="devicon:redis" fontSize={100} />
        </div>
      </div>
    </div>
  );
}
