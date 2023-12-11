import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Carousel2 from "@/components/Home/Carousel2";
import SubNavbar from "@/components/Home/SubNavbar";
import Offers from "@/components/Offers";
import Products from "@/components/Products";
import Review from "@/components/Review";

export default function Home() {
  return (
    <main className="text_family">
      
      {/* <Carousel></Carousel> */}
   
      <Carousel2></Carousel2>
      <Category></Category>
      <Products></Products>
      <Offers></Offers>
      <Gallery></Gallery>
      <Review></Review>
      <Contact></Contact>

    </main>
  )
}
