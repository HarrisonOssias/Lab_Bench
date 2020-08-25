import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import LocalNavbar from '../components/LocalNavbar';
import '../App.css'

export default function Classes(){
    return (<div>
        <LocalNavbar/>
        <div className='home center-text'>
            <p> CLASSROOM </p>
            <a href='/calendar'>Access calendar</a>
            <br/>
            <a href='/course/xxx'>Access course</a> 
        </div>
    </div>);
}