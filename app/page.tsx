import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { test } from "node:test";

const state = true;

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hatdog imnida</p>
      <Button>Click me</Button>
    </div>
  );
}
