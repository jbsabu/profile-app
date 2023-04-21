import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const quotes = [
  {quoter: "Socrates",quote:"The only true wisdom is in knowing you know nothing."},
  {quoter: "Groucho Marx",quote: "I refuse to join any club that would have me as a member."},
  {quoter: "Margaret Mead",quote: "Always remember that you are absolutely unique. Just like everyone else."}
]

export default function Quote() {
  const [quoteIndex,setQuoteIndex] = useState(0)
  const quoteHovered = ()=>{
    if (quoteIndex < 2)
    setQuoteIndex(quoteIndex + 1)
    else
    setQuoteIndex(0)
  }
  return (
    <section>
      <Container className="quote-container">
        <Row className="text-center">
          <Col>

          <p onMouseEnter={()=>quoteHovered()} className="quote">  <q>
             {`${quotes[quoteIndex].quote}`}
            </q>{` - ${quotes[quoteIndex].quoter}`}</p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
