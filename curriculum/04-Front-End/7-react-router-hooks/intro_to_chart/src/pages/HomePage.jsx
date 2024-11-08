import Carousel from 'react-bootstrap/Carousel';
import areaChartPic from '../assets/area-chart.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return(
        <>
            <h1 style={{textAlign: "center"}} >Home Page</h1>
            <div style={{margin: "50px auto", backgroundColor: "black"}} >
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            style={{width: "800px", height: "400px"}}
                            className="d-block w-100"
                            src={areaChartPic}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Area Chart Example</h5>
                            <p>In this example we go over the recharts area chart component can be showcased.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{width: "800px", height: "400px"}}
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=eee"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{width: "800px", height: "400px"}}
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default HomePage