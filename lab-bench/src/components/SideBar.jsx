import React from 'react';

import '../App.css';

function SideBar(){
    return(
        <div className='sideBar'>
            <h3>Course Content</h3>
            <ol className='sideList'>
                <li className='chapter' ><a href='/this'>class 1</a></li>
                <li className='chapter'>class 2</li>
                <li className='chapter'>class 3</li>
                <li className='chapter'>class 4</li>
                <li className='chapter'>class 5</li>
                <li className='chapter' ><a href='/this'>class 1</a></li>
                <li className='chapter'>class 2</li>
                <li className='chapter'>class 3</li>
                <li className='chapter'>class 4</li>
                <li className='chapter'>class 5</li>
                <li className='chapter' ><a href='/this'>class 1</a></li>
                <li className='chapter'>class 2</li>
            </ol>
        </div>
    );
}

export default SideBar;                