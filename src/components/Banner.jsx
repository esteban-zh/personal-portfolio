import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/photo-profile.jfif";

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Electronic Engineer"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>welcome to my portfolio</span>
                    <h1>{`Hi I'm Esteban,  `}<span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsa totam quia! </p>
                    <button onClick={() => console.log('contact me')}> Contact me <FaArrowCircleRight /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
