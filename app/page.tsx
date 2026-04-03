import Gallery from "@/components/generic/Gallery";
import Hero from "@/components/generic/Hero";
import HowItWorks from "@/components/generic/HowItWorks";
import Pricing from "@/components/generic/Pricing";
import Testimonials from "@/components/generic/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      {/* <Button>Alhamdulillah</Button> */}
      <Hero />
      <Gallery />
      <HowItWorks />
      <Pricing /> 
      <Testimonials />
    </main>
  );
}
