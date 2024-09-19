import { Navbar } from "../components/Navbar/Navbar";
import { Section } from "../components/Section/Section";
import { ProductCards } from "../components/ProductCards/ProductCards";
import { Carousel } from "../components/Carousel/Carousel";
function Home() {

    
  return (
    <>
      <Navbar />
      <Section>
        <Carousel />
        <h2>Products</h2>
        <p className="description">
          Come check our latest products on the store!
        </p>
        <div>
          <ProductCards />
        </div>
      </Section>
    </>
  );
}

export default Home;
