import Gallery from "@/components/custom/Gallery";
import Hero from "@/components/custom/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      {/* <Button>Alhamdulillah</Button> */}
      <Hero />
      <Gallery />
    </main>
  );
}
