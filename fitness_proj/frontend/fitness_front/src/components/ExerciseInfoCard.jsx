import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useOutletContext } from 'react-router-dom';
import { useState } from "react"

const ExerciseInfoCard = () => {
    const { searchResults } = useOutletContext();
    const [showInstructions, setShowInstructions] = useState(null);
    const handleClose = () => setShowInstructions(null);
    const handleShow = (index) => setShowInstructions(index); 

    return(
        <>
            <div className='search_result_card' style={{padding: '20px', display: 'flex', flexWrap:'wrap', 
                                                        margin: '100px auto',  gap: '20px', overflow: 'auto', 
                                                        justifyContent:'center'}}>
            {searchResults && Array.isArray(searchResults['exercises']) ? (
                searchResults['exercises'].map((exercise, index) =>(                    
                    <>
                    <Card key={index} bg='primary' text='white' style={{ 
                        height: '300px', 
                        overflow: 'hidden', 
                        fontWeight: "800",
                        width: "18rem"
                    }}>
                        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}  >
                            <Card.Title style={{marginBottom: '25px', textAlign: "center"}} >{exercise.name}</Card.Title>
                            <Card.Subtitle style={{marginBottom: '10px', textAlign: "center"}} >Type: {exercise.type}</Card.Subtitle>
                            <Card.Subtitle style={{marginBottom: '10px', textAlign: "center"}} >Muscle: {exercise.muscle}</Card.Subtitle>
                            <Card.Subtitle style={{marginBottom: '10px', textAlign: "center"}} >Equipment: {exercise.equipment}</Card.Subtitle>
                            <Card.Subtitle style={{marginBottom: '10px', textAlign: "center"}} >Difficulty: {exercise.difficulty}</Card.Subtitle> 
                            <div style={{display: "flex", alignItems:"center", margin: "20px auto", gap: '10px', marginTop: 'auto' }}>
                                <Button variant="light" onClick={ () => handleShow(index)}>Instructions</Button>
                                <Button variant="light">Add???</Button>
                            </div>
                            <Modal show={showInstructions === index} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Instructions</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {exercise.instructions}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>  
                        </Card.Body>
                    </Card>

                    </>
                ))
            ) : 
                null
            }
            </div>
        </>
    )
}

export default ExerciseInfoCard