import React from 'react'
import { Tab, Col, Row, Container  } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCards/ProjectCard';
import colorSharp2 from "../../assets/img/color-sharp2.png"
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import './styles.css'

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  
  return (
    <section className='project' id='project'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit..</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index}
                                            {...project}/>
                                        )
                                    })
                                }
                            </Row>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} className="background-image-right" />
    </section>
  )
}
