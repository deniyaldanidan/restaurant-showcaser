import AddressNTimings from "@/components/AddressNTimings/AddressNTimings";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Home/Hero";
import OurStory from "@/components/Home/OurStory";
import TestimonialsSection from "@/components/Home/TestimonialsSection/TestimonialsSection";
import WhatWeServe from "@/components/Home/WhatWeServe/WhatWeServe";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeServe />
      <OurStory />
      <TestimonialsSection />
      <CTASection />
      <AddressNTimings />
    </>
  );
}
