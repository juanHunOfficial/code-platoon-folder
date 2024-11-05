import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CharacterInfoPage(){
    const location = useLocation();
    const charData = location.state;
    const [characterName, setCharacterName] = useState("")
    const [characterGender, setCharacterGender] = useState("")
    const [characterImg, setCharacterImg] = useState("")
    const [characterOrigin, setCharacterOrigin] = useState("")
    const [characterSpecies, setCharacterSpecies] = useState("")

   useEffect(() => {
        async function getData(passedData) {
        let {data} = await axios.get(passedData)
        setCharacterName(data.name)
        setCharacterImg(data.image)
        setCharacterGender(data.gender)
        setCharacterOrigin(data.origin.name)
        setCharacterSpecies(data.species)
        } getData(charData)
    })

    console.log(charData)
    return(
        <>
            <div style={{display: "flex", flexDirection: "column",marginTop: "10rem" ,alignItems: "center", justifyContent: "center"}} >
                <img src={characterImg} style={{height: "400px", width: "400px"}} />
                <Card style={{ width: '400px', textAlign: "center" }}>
                    <Card.Header>{characterName}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Gender: {characterGender}</ListGroup.Item>
                        <ListGroup.Item>Origin: {characterOrigin}</ListGroup.Item>
                        <ListGroup.Item>Species: {characterSpecies}</ListGroup.Item>
                        
                    </ListGroup>
                </Card>
            </div>
        </>
    )
}

export default CharacterInfoPage