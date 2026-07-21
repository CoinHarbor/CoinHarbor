import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InvestmentProducts from "@/components/sections/InvestmentProducts";
import Market from "@/components/sections/Market";
import InvestmentCalculator from "@/components/sections/InvestmentCalculator";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";


export default function Home() {
  return (
    <>
      <Navbar />
     

      <main>
        <Hero />
         <Market />
        <InvestmentCalculator />
        <Services />
        <WhyChooseUs />
        <InvestmentProducts />
        <Security />
        <Testimonials />
        <Faq />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
    

