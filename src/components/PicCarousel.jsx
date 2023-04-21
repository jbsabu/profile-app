import { Container,Row,Col,Carousel } from "react-bootstrap";
// deja vu [wrtbufecs]
export default function PicCarousel () {

  return (
<section>
  <Container>
    <Row>
      <Col className="p-0 carousel-container">
        <Carousel fade>
          <Carousel.Item>
            <img src="https://picsum.photos/200/300?random=1" alt="" className = "d-block w-100"/>
            <Carousel.Caption>
            <h2>First Item</h2>
            <p>First item are great because they are the first. and I must learn to write better english.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/200/300?random=2" alt="" className = "d-block w-100"/>
            <Carousel.Caption>
            <h2>First Item</h2>
            <p>First item are great because they are the first. and I must learn to write better english.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item> 
            <img src="https://picsum.photos/200/300?random=3" alt="" className = "d-block w-100"/>
            <Carousel.Caption>
            <h2>First Item</h2>
            <p>First item are great because they are the first. and I must learn to write better english.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
</section>  )
}