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
import Cart from "./Components/LandingPage/Header/Navbar/Cart/Cart";
import BookMark from "./Components/LandingPage/Header/Navbar/BookMark/BookMark";
import Search from "./Components/Section/Search/Search";
// import Footer from "./Components/LandingPage/HeroSection/Footer/Footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{top:"0", position:"sticky", zIndex:"1"}}>
      <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<LandindPageComponents />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/lips" element={<Lips />} />
        {/* <Route path="/skincare" element={<SkinCare />} /> */}
        <Route path="/offers" element={<Offers />} />
        <Route path="/foundation" element={<Face />} />
        <Route path="/eyes" element ={<Eyes/>}/>
        <Route path="/brushes" element={<Brushes />} />
        {/* <Route path="/stories" element={<Stories />} /> */}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/bookmark" element={<BookMark/>}/>
        <Route path="/search" element={<Search/>}/>


      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';

// export default function App() {
//   const [timeDecrement, setTimeDecrement] = useState(30);
//   const [timeIncrement, setTimeIncrement] = useState(0);

//   useEffect(() => {
//     const increseInterval = setTimeout(() => {
//       if (timeIncrement === 30) {
//         alert("Time's Up !!");
//         clearTimeout(increseInterval);
//       } else {
//         setTimeIncrement(timeIncrement + 1);
//       }
//     }, 1000);
//     return () => clearTimeout(increseInterval);
//   }, [timeIncrement]);

//   useEffect(() => {
//     const decreseTime = setTimeout(() => {
//       if (timeDecrement === 0) {
//         alert("Time's Up!!");
//         clearTimeout(decreseTime);
//       }else{
//         setTimeDecrement(timeDecrement - 1);

//       }
//     }, 1000);

//     return () => clearTimeout(decreseTime);
//   }, [timeDecrement]);

//   return (
//     <div>
//       <p>IncreaseTime = {timeIncrement}</p>
//       <p>DecreaseTime = {timeDecrement}</p>
//     </div>
//   );
// }
