import React from 'react'
import { Carousel } from 'react-bootstrap';

function MyCarousel({ imgsrc, domain, desc }) {
    return (
        // <Carousel.Item interval={2000}>
        //     <img
        //         className="d-block w-100"
        //         src={imgsrc}
        //         alt="First slide"
        //     />
        //     <Carousel.Caption>
        //         <h3>{domain}</h3>
        //         <p>{desc}</p>
        //     </Carousel.Caption>
        // </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://trello-attachments.s3.amazonaws.com/5f81c78bb4c7951c3be5060c/5fb1d3656e20326524242704/fd6debd661d28abc2d9fda3d18261af8/NLP_WATTSAPP.png"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default MyCarousel
