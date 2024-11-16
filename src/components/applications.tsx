import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Apps() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <h1 className="text-6xl font-extrabold tracking-wide my-5 uppercase">
        our project
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <Link
          className="p-8 border-2 border-muted-foreground rounded-xl flex flex-col space-y-2 items-center bg-muted/10 hover:scale-105 duration-200 transtion-all"
          href="https://smart-campus-tiet.vercel.app/"
          target="_blank"
        >
          <Icon icon="ph:student-fill" fontSize={100} />
          <span>Student Dashboard</span>
        </Link>
        <Link
          className="p-8 border-2 border-muted-foreground rounded-xl flex flex-col space-y-2 items-center bg-muted/10 hover:scale-105 duration-200 transtion-all"
          href="https://web-production-0c17.up.railway.app"
          target="_blank"
        >
          <Icon icon="eos-icons:admin" fontSize={100} />
          <span>Admin Panel</span>
        </Link>
        <Link
          className="p-8 border-2 border-muted-foreground rounded-xl flex flex-col space-y-2 items-center bg-muted/10 hover:scale-105 duration-200 transtion-all"
          href="https://smart-campus-tiet-production.up.railway.app/"
          target="_blank"
        >
          <Icon icon="ic:twotone-api" fontSize={100} />
          <span>API Documentation</span>
        </Link>
      </div>
    </div>
  );
}
