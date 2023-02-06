import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import contactImg from '../../assets/img/cantact-us.jpg';
import './styles.css';

export const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('sending...')
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "content-type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
        setStatus({ success: true, message: "message sent succesfully"})
    } else {
        setStatus({ success: false, message: "something went wrong please try again later"})
    }
  };

  return (
    <section className='contact' id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="" />
                </Col>
                <Col md={6}>
                    <h2>Get in touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder='first name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder='last name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder='email' onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder='phone' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col>
                                <textarea row="6" value={formDetails.message} placeholder="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col>
                                <p className={status.sucess === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
