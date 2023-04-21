import { useState } from "react";
import { Col, Container, Modal, Row, Button  } from "react-bootstrap";
// import pic from '../../public/images/portrait.jpg'
const randomNumber = (arr) => {
  
  return Math.floor(Math.random() * 10)
}

export default function About() {
  const [imgIndex,setImgIndex] = useState(1)


  return (
    <main>
      <Container >
        <Container ></Container>
        <Row className="text-center">
          <Col sm={12} md={5}>
            <img
              src={'/images/portrait.jpg'}
              alt="profile"
              className="rounded-circle about-img"
              
            />
   
          </Col>
          <Col className="about-container" >
          <h1 className = "mt-1">Jonathan Sabuncu</h1>
          <p style={{}} className="about-p">
          I grew up in Upstate New York and later moved to Costa Rica, where I lived for around four years. Being surrounded by nature in both places made me appreciate science, especially natural science. I was always intrigued by coding and science, and I enjoy the challenge of learning new things and solving problems. After working in several jobs that were stressful and didn't pay well, I realized I wanted a more financially stable and flexible career. That's why I'm pursuing software engineering. I love being able to work with code every day and use my problem-solving skills to create useful tools. It's a dynamic field that's always changing and challenging, which is something I really enjoy.          </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
