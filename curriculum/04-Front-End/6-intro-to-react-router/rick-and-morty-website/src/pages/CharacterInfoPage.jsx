import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import LoadingSpinner from '../components/LoadingSpinner';

function CharacterInfoPage(){
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [characterName, setCharacterName] = useState("")
    const [characterGender, setCharacterGender] = useState("")
    const [characterImg, setCharacterImg] = useState("")
    const [characterOrigin, setCharacterOrigin] = useState("")
    const [characterSpecies, setCharacterSpecies] = useState("")

       
    async function getData(id) {
        
        let {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacterName(data.name)
        setCharacterImg(data.image)
        setCharacterGender(data.gender)
        setCharacterOrigin(data.origin.name)
        setCharacterSpecies(data.species)
    }
    
   useEffect(() => {
        setTimeout(() => {
            getData(id)
            setLoading(false)
        }, 1000)
    }, [])

    return(
        <>
            {loading ? (
                <div style={{height: "500px", width: "500px", textAlign: "center", margin: "80px auto"}}>
                    <LoadingSpinner style={{height: "500px", width: "500px"}} />
                </div>
            ) : (
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
                )
            }
        </>
    )
}

export default CharacterInfoPage