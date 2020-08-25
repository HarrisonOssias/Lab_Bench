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
            <p> Its a calendar </p>
        </div>
    </div>);
}