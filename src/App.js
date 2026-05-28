import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import CategorySelector from "./components/CategorySelector";


function App() {

  return (
  <>
  <Header />
  <HeroBanner />
  <CategorySelector />
  <Footer />
  </>
  );
}

export default App;
