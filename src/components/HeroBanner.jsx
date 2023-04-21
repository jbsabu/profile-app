import { useState } from "react";
// import images from ".././imageSequence"

import { Row, Col, Container } from "react-bootstrap";
const images = [];
const seq = "../imageSequence/";
const defSettings = {
  border: "50px red",
  padding: "0vw",
  width: "100%",
  height: "50vw",
  backgroundSize: "cover",
};

// document.getElementsByName('body').style

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

export default function HeroBanner() {
  const [imgStyle, setImgStyle] = useState({
    backgroundImage: "url(/imageSequence/0001.jpg)",
    ...defSettings,
  });
  // Images asset

  // Text style

  // Global variable to control the scrolling behavior
  const step = 1; // For each 30px, change an image

  function trackScrollPosition() {
    const y = window.scrollY;

    const label = Math.min(Math.floor(y / step) + 1, 20);
    // console.log(label)
    // 'background-image', `url('${imageToUse}')`
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
    // console.log(imageToUse)
    // Change the background image
    const style = { backgroundImage: `url(${imageToUse})`, ...defSettings };
    setImgStyle(style);

    console.log(style);
  }

  window.addEventListener("scroll", trackScrollPosition);

  return (
    <section>
      <Container
        className="heroBanner"
        style={imgStyle}
        onScroll={trackScrollPosition}
      >
      </Container>
    </section>
  );
}
