import LandindPageComponents from "./Components/LandingPage/LandindPageComponents";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Section/Blog/Blog";
import Lips from "./Components/Section/Lips/Lips";
import SkinCare from "./Components/Section/SkinCare/SkinCare";
import Offers from "./Components/Section/Offers/Offers";
import Face from "./Components/Section/Foundation/Foundation";
import Eyes from "./Components/Section/Eyes/Eyes";
import Brushes from "./Components/Section/Brushes/Brushes";
import Stories from "./Components/Section/Stories/Stories";
import Navbar from './Components/LandingPage/Header/Navbar/Navbar';
import NavProducts from './Components/LandingPage/Header/NavProducts/NavProducts';
import Cart from "./Components/LandingPage/Header/Navbar/Cart/Cart";
import BookMark from "./Components/LandingPage/Header/Navbar/BookMark/BookMark";
import Footer from "./Components/LandingPage/HeroSection/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div style={{top:"0", position:"sticky", zIndex:"1"}}>
      <Navbar />
      <NavProducts />
      </div>
      
      <Routes>
        <Route path="/" element={<LandindPageComponents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/lips" element={<Lips />} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/foundation" element={<Face />} />
        <Route path="eyes" element ={<Eyes/>}/>
        <Route path="/brushes" element={<Brushes />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/bookmark" element={<BookMark/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
