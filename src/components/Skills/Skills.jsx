import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaNodeJs, FaReact, FaGithub } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { RiEnglishInput } from 'react-icons/ri'
import colorSharp from '../../assets/img/color-sharp.png'
import './styles.css'

export const Skills = () => {
  
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        skills
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className='item'>
                            {/* <img src={} alt="Image" /> */}
                            <span><FaHtml5 /></span>
                            <h5>HTML Y CSS</h5>
                        </div>
                        <div className='item'>
                            <span><FaNodeJs /></span>
                            <h5>Node js</h5>
                        </div>
                        <div className='item'>
                            <span><FaReact /></span>
                            <h5>React js</h5>
                        </div>
                        <div className='item'>
                            <span><SiJavascript /></span>
                            <h5>Javascript</h5>
                        </div>
                        <div className='item'>
                            <span><FaGithub /></span>
                            <h5>Git y Github</h5>
                        </div>
                        <div className='item'>
                            <span><RiEnglishInput /></span>
                            <h5>English upper-intermediate B2 </h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} className='background-image-left' />
    </section>
  )
}
