import React from 'react'
import { Col, Nav } from 'react-bootstrap';
import './styles.css';


export const ProjectCard = ({ title, description, projectUrl, imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt="imgurl"/>
            <div className="proj-txtx">
                <Nav.Link href={projectUrl}><h4>{title}</h4></Nav.Link>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}
