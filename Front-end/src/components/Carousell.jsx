import React from 'react';
import img from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import Carousel from 'react-bootstrap/Carousel'

const Carousell = () => {
    return (  
        <Carousel>
            <Carousel.Item interval={1000} className="item imgs">
                <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Desde tu casa</h3>
                    <p>Sin necesidad de filas, estate actualizado de las mas nuevas series y peliculas del momentp.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000} className="item">
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    id="item2"
                />
                <Carousel.Caption>
                    <h3>Desde netflix hasta HBO</h3>
                    <p>Las mejores series del momento de todas las plataformas aqui las encuentras.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000} className="item">
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    id="item3"
                />
                <Carousel.Caption>
                    <h3>Las peliculas del momento</h3>
                    <p>Disfruta de los mejores eventos filmatograticos de la actualidad, con los estrenos mas recientes del cine.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
 
export default Carousell;