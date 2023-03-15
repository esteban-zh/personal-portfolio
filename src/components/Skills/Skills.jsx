import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaNodeJs, FaReact, FaGithub, FaCss3 } from 'react-icons/fa'
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
                        Skills
                    </h2>
                    <p>Outstanding soft skills so as to work in a company and work in teams, besides knowledge in software development, stack MERN, MongoDB, Express, React.js, Node.js, Git and so on </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className='item'>
                            <span><FaHtml5  className='img' /></span>
                            <h5>HTML</h5>
                        </div>
                        <div className='item'>
                            <span><FaCss3  className='img' /></span>
                            <h5>CSS</h5>
                        </div>
                        <div className='item'>
                            <span><FaNodeJs  className='img' /></span>
                            <h5>Node js</h5>
                        </div>
                        <div className='item'>
                            <span><FaReact  className='img' /></span>
                            <h5>React js</h5>
                        </div>
                        <div className='item'>
                            <span><SiJavascript  className='img' /></span>
                            <h5>Javascript</h5>
                        </div>
                        <div className='item'>
                            <span><FaGithub  className='img' /></span>
                            <h5>Git y Github</h5>
                        </div>
                        <div className='item'>
                            <span><RiEnglishInput  className='img' /></span>
                            <h5>English C1 </h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} className='background-image-left' alt='img-left' />
    </section>
  )
}
