import "./App.scss";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import umbrellas from "./assets/images/umbrellas.jpg";
import umbrella from "./assets/images/umbrella.png";
import { Gallery } from "./components/Gallery/Gallery";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Section
        img={umbrellas}
        imgDescription="umbrellas"
        minImg={umbrella}
        minImgDescription={
          "Descripcion del producto. Este es un texto simulado"
        }
        nameSection="PUFI RAIN"
      />
      <Section
        img={umbrellas}
        imgDescription="umbrellas"
        minImg={umbrella}
        minImgDescription={
          "Descripcion del producto. Este es un texto simulado"
        }
        reverse={true}
        nameSection="PUFI PUFF"
      />
      <Section
        img={umbrellas}
        imgDescription="umbrellas"
        minImg={umbrella}
        minImgDescription={
          "Descripcion del producto. Este es un texto simulado"
        }
        nameSection="PUFI CART"
      />
      <Section
        img={umbrellas}
        imgDescription="umbrellas"
        minImg={umbrella}
        minImgDescription={
          "Descripcion del producto. Este es un texto simulado"
        }
        nameSection="PUFI NAP"
        reverse={true}
      />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
