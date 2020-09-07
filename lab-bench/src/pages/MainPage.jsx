import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LocalNavbar from '../components/LocalNavbar';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

import '../App.css'

export default function MainPage(){


    return(<div className='page'>
        <LocalNavbar/>
        <Container className='home'>
            {/* Restructure to array mapping */}
            
            <div className='top'>
                <div className='header'>
                    <h1>Welcome to the future of learning</h1>
                    <p>With the power of technology we can create a more connected learning experience that allows students to create a meaningful connection with their acamdemic content</p>
                    <Button variant='outline-success'>Contact us today!</Button>
                </div>
                <img src='https://cdn3.iconfinder.com/data/icons/e-learning-fill-outline-1/64/Alternative-distance-learning-training_1-512.png' alt='header'/>
            </div>
            <hr/>

            <h1>Create a customized class that's right for your course.</h1> 
            <Container fluid>
                <Row>
                    <Col>
                        <FeatureCard icon='alarmOnIcon'/>
                    </Col>
                    <Col>
                        <FeatureCard icon='map'/>
                    </Col>
                    <Col>
                        <FeatureCard icon='star'/>
                    </Col>
                </Row>
            </Container>
            <hr/>

            <h1>How it works</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-circle w-100"
                    src='https://www.publicdomainpictures.net/pictures/170000/nahled/banner-business-background-webpage.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>APSC100</h3>
                    <p>This course focuses on the basics of engineering.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>CMPE 323</h3>
                    <p>Learn how networks work with this introduction course, explore topics such as routers, communication protocols, and packet structures. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://blog.hightechpos.com/wp-content/uploads/2016/06/que_red_social_se_usa_mas_y_para_que-1028x432.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>CHEM 212</h3>
                    <p>Learn about different chemicals and how they interact with each other in this course.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <hr/>
             
        </Container>
        <Footer/>
          
    </div>)
}