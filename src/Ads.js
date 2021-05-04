
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components'
import image1 from './logo.svg';
// import image2 from './logo.svg';
// import image3 from './logo.svg';
// import MyCarousel from './MyCarousel';
const Cimg = styled.img`
padding:50px;
object-fit: contain;
    height: 50%;
    margin-bottom: 40px;
`
const cdiv = styled.div`
    max-width:600px;
`

const CarouselContainer = () => {
    // document.getElementsByTagName('body').classList = "bg-dark";
    return (

        <div className="bg-dark h-100">

            {/* 
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}


            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />

            {/* <h1>Hello, world!</h1> */}


            {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script> */}
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script> */}
            {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script> */}



            {/* <Carousel>
                {/* <MyCarousel Cimgsrc={image1} domain="IT" desc="DEV ADS" />

            </Carousel> */}

            <cdiv className="bg-dark">
                <Carousel >

                    <Carousel.Item className="p-10 rounded m-auto" >

                        <Cimg
                            className="d-block m-auto"
                            src="https://trello-attachments.s3.amazonaws.com/5f81c78bb4c7951c3be5060c/5fb1d3656e20326524242704/fd6debd661d28abc2d9fda3d18261af8/NLP_WATTSAPP.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <button className="btn btn-primary">See More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="p-10 rounded  m-auto">
                        <Cimg
                            className="d-block m-auto p-auto"
                            src="https://i.pravatar.cc/300"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            <button className="btn btn-primary">See More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </cdiv>

        </div>
    )
}

export default CarouselContainer;