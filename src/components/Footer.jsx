import { Container, Row,Col } from "react-bootstrap";

export default function Footer () {
  const currentYear = new Date().getFullYear()
  const ghURL = 'https://github.com/jbsabu/profile-app'
  return (
    <footer>
      <Container>
        <Row>
          <Col className = "text-center">
          <p id = 'footer'>&copy; {currentYear} Jonathan Sabuncu</p>
          <p><a href = {ghURL} target = "_blank" rel="noreferrer">Code in GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}