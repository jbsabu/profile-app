import { Container, Row, Col } from "react-bootstrap";

export default function Grid() {
  return (
    <section>
      <Container className="grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2>Why BocaCode?</h2>
            <p>
            I felt that Boca Code offered the most comprehensive and effective training program for someone like me who was seeking a career in software engineering. I appreciated the focus on real-world projects and the emphasis on both hard and soft skills, and I feel that the program has been preparing me well for success in the tech field.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h2>Exciting Project?</h2>
            <p>
            I've been interested in exploring the potential of language models, and one idea I've been considering is creating a model that can execute computer commands. This could involve using image recognition to identify software applications on the desktop. While I haven't started on this project yet, I think it would be an exciting challenge that could help me learn more about AI and working with different technologies.
            </p>
          </Col>
          <Col sm={12} md={4}>
            <h2>Ideal workplace?</h2>
            <p>
            An ideal workplace for me is one where I can constantly engage with new technologies and challenges, work with supportive colleagues, and feel comfortable being myself. I value inclusivity and diversity and would like to work with a team that fosters a welcoming environment for everyone. Ultimately, I am looking for a workplace where I can grow professionally and contribute my skills to meaningful projects.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
