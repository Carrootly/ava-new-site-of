import React from 'react';
import { Carousel } from 'react-bootstrap';
import AbekaLogo from '../assets/Abeka.png';
import Library from '../assets/library.jpeg';
import Students from '../assets/hs-cards.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/carousel.css';
import lines from '../assets/lines.png'



export default function Slides() {
    return (
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Carousel style={{width:'60%', height:'500px'}}>
            <Carousel.Item>
                <img style={{width:'500px', height: '500px'}} className="d-block w-100 imagem" src={Students} alt="Abeka-logo" />
                <Carousel.Caption className='headline'>
                    <h1>Curriculum</h1>
                    <p>Biblical worldview</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width:'500px', height: '500px'}} className="d-block w-100 imagem" src={Library} alt="award" />
                <Carousel.Caption className='headline'>
                    <h1>Library</h1>
                    <p>The best place</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

