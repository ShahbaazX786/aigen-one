import Gallery from "@/components/generic/Gallery";
import Hero from "@/components/generic/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      {/* <Button>Alhamdulillah</Button> */}
      <Hero />
      <Gallery />
    </main>
  );
}
