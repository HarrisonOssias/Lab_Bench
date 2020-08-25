import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import LocalNavbar from '../components/LocalNavbar';

import '../App.css'

export default function MainPage(){


    return(<div>
        <LocalNavbar/>
        <div className='home'>
        <Container>
            {/* Restructure to array mapping */}
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
            <br/>
        </Container>
        </div>
    </div>)
}