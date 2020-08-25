import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import LocalNavbar from '../components/LocalNavbar';
import '../App.css'

export default function Login(){
    return (<div>
        <LocalNavbar/>
        <div className='home'>
            <Container className='auth-inner center-text'>
                <Form>
                <h2> Learning Platform </h2>
                <br/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" href='/classes' block>
                    Login
                </Button>
                <br/>
                <a href='/password'>Forgot your password?</a>
                <p className='split'>-   or   -</p>
                <a href='/signup'> Create an account! </a>
                </Form>
            </Container>
        </div>
    </div>);
}