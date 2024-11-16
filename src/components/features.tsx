import { Icon } from "@iconify/react";

export default function Features() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold tracking-wide uppercase">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-6">
        <div className="h-[200px] w-[450px] hover:scale-105 duration-200 transtion-all border border-muted-foreground rounded-xl border-b-primary p-4">
          <div className="flex space-x-2 text-2xl items-center">
            <Icon icon="solar:library-bold-duotone" />
            <span>Library Module</span>
          </div>
          <p className="text-justify tracking-wide text-muted-foreground leading-relaxed my-3">
            A library management module to track book inventory, manage budgets,
            and process orders efficiently.
          </p>
        </div>
        <div className="h-[200px] w-[450px] hover:scale-105 duration-200 transtion-all border border-muted-foreground rounded-xl border-b-primary p-4">
          <div className="flex space-x-2 text-2xl items-center">
            <Icon icon="solar:library-bold-duotone" />
            <span>Events Module</span>
          </div>
          <p className="text-justify tracking-wide text-muted-foreground leading-relaxed my-3">
            Events module with a list of events, their details, and attendees
            for easy management.
          </p>
        </div>
        <div className="h-[200px] w-[450px] hover:scale-105 duration-200 transtion-all border border-muted-foreground rounded-xl border-b-primary p-4">
          <div className="flex space-x-2 text-2xl items-center">
            <Icon icon="solar:library-bold-duotone" />
            <span>Garbage Module</span>
          </div>
          <p className="text-justify tracking-wide text-muted-foreground leading-relaxed my-3">
            Campus garbage bin module for tracking waste levels, optimizing
            collection, and reducing overflow.
          </p>
        </div>
        <div className="h-[200px] w-[450px] hover:scale-105 duration-200 transtion-all border border-muted-foreground rounded-xl border-b-primary p-4">
          <div className="flex space-x-2 text-2xl items-center">
            <Icon icon="solar:library-bold-duotone" />
            <span>Weather & Fire Module</span>
          </div>
          <p className="text-justify tracking-wide text-muted-foreground leading-relaxed my-3">
            Campus weather & fire module with real-time data and fire alarm for
            safety and updates.
          </p>
        </div>
      </div>
    </div>
  );
}
