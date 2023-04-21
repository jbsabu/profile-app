import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const quotes = [
  
]

export default function Quote() {
  const [i,setI] = useState(0)
  const nextQuote = () => {
    if (i < quotes){

    }
  }

  return (
    <section>
      <Container className="quote-container">
        <Row className="text-center">
          <Col>

          <p>  <q>
             The only true wisdom is in knowing you know nothing.
            </q>{" - Socrates "}</p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
