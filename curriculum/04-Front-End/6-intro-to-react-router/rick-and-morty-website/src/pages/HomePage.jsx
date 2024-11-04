import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(){
    const rickInfo = ["https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                      "Rick Sanchez",
                      "C-137"
                    ]
    const mortyInfo = ["https://rickandmortyapi.com/api/character/avatar/2.jpeg", 
                       "Morty Smith",
                       "Unknown"
                       ]
    const summerInfo = ["https://rickandmortyapi.com/api/character/avatar/3.jpeg", 
                        "Summer Smith",
                        "Unknown"
                        ]
    const bethInfo = ["https://rickandmortyapi.com/api/character/avatar/4.jpeg", 
                      "Beth Sanchez",
                      "Unknown"
                      ]

    return(
        <>
            <h1>Home Page</h1>
            <Row xs={2} md={4} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={rickInfo[0]}  />
                        <Card.Body>
                            <Card.Title>{rickInfo[1]}</Card.Title>
                            <Card.Text>
                            Variant: {rickInfo[2]}  
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={mortyInfo[0]}  />
                        <Card.Body>
                            <Card.Title>{mortyInfo[1]}</Card.Title>
                            <Card.Text>
                            Variant: {mortyInfo[2]}  
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
        
                <Col>
                    <Card>
                        <Card.Img variant="top" src={summerInfo[0]}  />
                        <Card.Body>
                            <Card.Title>{summerInfo[1]}</Card.Title>
                            <Card.Text>
                            Variant: {summerInfo[2]}  
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={bethInfo[0]}  />
                        <Card.Body>
                            <Card.Title>{bethInfo[1]}</Card.Title>
                            <Card.Text>
                            Variant: {bethInfo[2]}  
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default HomePage