import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Founders />
        <Numbers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
