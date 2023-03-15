import React from 'react'
import { Tab, Col, Row, Container  } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCards/ProjectCard';
import colorSharp2 from "../../assets/img/color-sharp2.png"
import rentalCarsImg from "../../assets/img/project-rental-cars.jpg";
import yardSale from "../../assets/img/yard-sale.jpg";
import tikTok from "../../assets/img/tik-tok.jpg";
import rickandmorty from "../../assets/img/morty.jpg"
import twitter from "../../assets/img/tweet.jpg"
import Automation from "../../assets/img/sistemas-automatizados.jpeg"
import './styles.css'

export const Projects = () => {

  const projects = [
    {
      title: "Buggy and Bumper",
      description: "App rental cars, landing page using node.js, express, mongoDB, Mongo Atlas cluster, backend deployed in render server, frontend in React.js and deploy in netlify server.",
      projectUrl:"https://cars-to-rental.netlify.app/",
      imgUrl: rentalCarsImg,
    },
    {
      title: "Yard sale",
      description: "React.js single page application(SPA), using custome Webpack settings. This store works on the client side and queries an API to fetch products.",
      projectUrl:"https://sale-shop.netlify.app/",
      imgUrl: yardSale,
    },
    {
      title: "tik-tok clone",
      description: "React.js application cloning the main views of tiktok application",
      projectUrl:"https://tik-tak-clone.netlify.app/",
      imgUrl: tikTok,
    },
    {
      title: "Rick and morty API",
      description: "A simple application deployed through github page using React.js and Bootstrap, consuming Rick and Morty API",
      projectUrl:"https://esteban-zh.github.io/RickandMortyAPI/",
      imgUrl: rickandmorty,
    },
    {
      title: "Twitter clone",
      description: "Cloning the home page of twitter application using React.js with Vite, CSS modules",
      projectUrl:"https://esteban-zh.github.io/twitterProject/",
      imgUrl: twitter,
    },
    {
      title: "Automation solutions",
      description: "Web application with Firebase and React.js,  in order to take over each work made daily basis by the team of maintenance area in the Automation solutions company (login with email: ultimo@ultimo.com and password: 0987654 or create your own account",
      projectUrl:"https://automation-solutions.netlify.app/",
      imgUrl: Automation,
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
        <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}
