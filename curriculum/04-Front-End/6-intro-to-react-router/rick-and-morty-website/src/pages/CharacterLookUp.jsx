import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios"



function CharacterLookUp({setCharData}){
    

    const handleSubmit = async() => {
        const idToFetch = document.querySelector("#character-look-up-form")
        let {data} = await axios.get(`https://rickandmortyapi.com/api/character/${idToFetch.value}`)
        idToFetch.value = ""
        setCharData(data)
        // window.history.pushState({}, "", "/character-info")
    }


    return(
        <>
            <div id='character-look-up-container' style={{margin: "40px auto" , width: "500px", height: "200px", textAlign: 'center'}} >
                <Form.Label >Character Look Up</Form.Label>
                <Form.Control
                    type="text"
                    id="character-look-up-form"
                />
                <Form.Text id="searchHelpBlock" muted>
                    You can enter in the name of any character to fetch their information and display it on the screen.
                </Form.Text>
            </div>
            <div style={{margin: "0px auto", textAlign: "center"}}>
                <Button variant="primary" type="submit" onClick={handleSubmit} >Submit</Button>
            </div>
        </>
    )
}

export default CharacterLookUp