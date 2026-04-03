import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="p-4 flex gap-4">
      <Button>Alhamdulillah</Button>
      <ModeToggle />
    </div>
  );
}
