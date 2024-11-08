import Carousel from 'react-bootstrap/Carousel';
import areaChartPic from '../assets/area-chart.png';
import barChartPic from '../assets/bar-chart.png';
import lineChartPic from '../assets/line-chart.png';

const HomePage = () => {
    return(
        <>
            <h1 style={{textAlign: "center"}} >Home Page</h1>
            <div style={{margin: "50px auto", backgroundColor: "black"}} >
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            style={{width: "500px", height: "500px"}}
                            className="d-block w-100"
                            src={areaChartPic}
                            alt="First slide: An Area Chart Picture"
                        />
                        <Carousel.Caption>
                            <h5>Area Chart Example</h5>
                            <p>In this example we go over the recharts area chart component can be showcased.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{width: "500px", height: "500px"}}
                            className="d-block w-100"
                            src={barChartPic}
                            alt="Second slide: A Bar Chart Picture"
                        />
                        <Carousel.Caption>
                            <h5>Bar Chart Example</h5>
                            <p>This example goes over the bar chart from recharts component.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{width: "500px", height: "500px"}}
                            className="d-block w-100"
                            src={lineChartPic}
                            alt="Third slide: Line Chart Example"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>This example is a simple line chart with different stroke sizes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default HomePage