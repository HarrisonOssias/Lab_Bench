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
            <h1> COURSE </h1>
            <div> 
                <h2>topics</h2> 
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </div>
            <div> 
                <h2>Video</h2> 
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
            <div> 
                <h2>Text</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

</p>
            </div>
            <div> 
                <h2>Tool</h2> 
            </div>
        </div>
    </div>);
}