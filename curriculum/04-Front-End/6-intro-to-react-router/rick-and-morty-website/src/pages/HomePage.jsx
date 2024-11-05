import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate();

    const rickInfo = ["https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                      "Rick Sanchez",
                      "C-137", "1"
                    ]
    const mortyInfo = ["https://rickandmortyapi.com/api/character/avatar/2.jpeg", 
                       "Morty Smith",
                       "Unknown", "2"
                       ]
    const summerInfo = ["https://rickandmortyapi.com/api/character/avatar/3.jpeg", 
                        "Summer Smith",
                        "Unknown", "3"
                        ]
    const bethInfo = ["https://rickandmortyapi.com/api/character/avatar/4.jpeg", 
                      "Beth Sanchez",
                      "Unknown", "4"
                      ]
                    
    const sendToCharacterInfoPage = (e) =>{
        if(e.target.id === "rick-btn"){
            navigate(`character-info/${rickInfo[3]}`)
        }else if (e.target.id === "morty-btn"){
            navigate(`character-info/${mortyInfo[3]}`)
        }else if(e.target.id === "summer-btn"){
            navigate(`character-info/${summerInfo[3]}`)
        }else if(e.target.id === "beth-btn"){
            navigate(`character-info/${bethInfo[3]}`)
        }
    }


    return(
        <>
            <h1>Rick and Morty Main Characters</h1>
            <div style={{margin: "50px auto" , textAlign: "center", justifyContent: "center", alignItems: "center"}} >
                <Row xs={2} md={4} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={rickInfo[0]}  />
                            <Card.Body>
                                <Card.Title>{rickInfo[1]}</Card.Title>
                                <Card.Text>
                                    Variant: {rickInfo[2]}  
                                </Card.Text>
                                <Button variant="primary" id='rick-btn' onClick={sendToCharacterInfoPage} >Learn More</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={mortyInfo[0]}  />
                            <Card.Body>
                                <Card.Title>{mortyInfo[1]}</Card.Title>
                                <Card.Text>
                                    Variant: {mortyInfo[2]}  
                                </Card.Text>
                                <Button variant="primary" id='morty-btn' onClick={sendToCharacterInfoPage}>Learn More</Button>
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
                                <Button variant="primary" id='summer-btn' onClick={sendToCharacterInfoPage} >Learn More</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={bethInfo[0]}  />
                            <Card.Body>
                                <Card.Title>{bethInfo[1]}</Card.Title>
                                <Card.Text>
                                Variant: {bethInfo[2]}  
                                </Card.Text>
                                <Button variant="primary" id='beth-btn' onClick={sendToCharacterInfoPage} >Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default HomePage