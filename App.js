import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Product";
import Slider from "./Components/Slider/Slider";
import Testimonial from "./Components/Testimonials/Testimonial";
import Virtual from "./Components/Virtual/Virtual";
import Header from "./Components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
