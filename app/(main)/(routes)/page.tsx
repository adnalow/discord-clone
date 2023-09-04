import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { test } from "node:test";

const state = true;

export default function Home() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  );
}
