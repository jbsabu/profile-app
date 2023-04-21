import About from "./components/About";
import Quote from "./components/Quote";
import Grid from "./components/Grid";
import PicCarousel from "./components/PicCarousel";
import Video from "./components/Video";
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeroBanner from "./components/HeroBanner";
import { useState } from "react";
const step = 5
const images = [];
const seq = "../imageSequence/";



function App() {
  const formatNum = (num) => {
    const len = String.toString(num);
    let str = `${num}`;

    for (let i = 0; str.length <= 3; i++) {
      str = `0${str}`;
    }

    return str;
  };
  for (let i = 0; i <= 499; i++) {
    let url = `${seq}${formatNum(i)}.jpg`;
    let img = new Image();
    img.src = url;
    console.log(img.src);
    images[i] = img;
  }
  const [imgStyle, setImgStyle] = useState({
    backgroundImage: "url(/imageSequence/0001.jpg)"
  });

  function trackScrollPosition() {
    const y = window.scrollY;

    const label = Math.min(Math.floor(y / step) + 1, 500);
    const formatNum = (num) => {
      const len = String.toString(num);
      let str = `${num}`;

      for (let i = 0; str.length <= 3; i++) {
        str = `0${str}`;
      }
      document.getElementsByName('HeroBanner').style = {
        overflow: "hidden"
       }
      return str;
    };
    const imageToUse = `${seq}${formatNum(label)}.jpg`;
    const style = { backgroundImage: `url(${imageToUse})`,backgroundSize: "cover" };
    
    setImgStyle(style);

    console.log(style);
  }

  window.addEventListener("scroll", trackScrollPosition);

  return (
    <div className="App" style = {imgStyle}>
      {/* <HeroBanner /> */}
      <About />
      <Quote />
      <Grid />
      {/* <PicCarousel />
      <Video /> */}
      <Footer />
    </div>
  );
}

export default App;
