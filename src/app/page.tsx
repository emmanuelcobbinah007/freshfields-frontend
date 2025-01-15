import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import ProductCategories from "./components/ProductCategories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-poppins">
    <div className="bg-[#FFC1070F] h-[40px]"></div>
    <Navbar/>
    <Hero/>
    <Trust />
    <ProductCategories />
    <Footer />
    </div>
  );
}
