import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/Who";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Services/>
      <WhoWeAre/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
