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
        <div className='page_div'>
            <div className='result_cards' >
            {searchResults && Array.isArray(searchResults['exercises']) ? (
                searchResults['exercises'].map((exercise, index) =>(                    
                    <>
                    <Card key={index} bg='secondary' text='white' style={{ 
                        height: '300px', 
                        overflow: 'hidden', 
                        fontWeight: "800",
                        width: "18rem"
                    }}>
                        <Card.Body className='search_result_card_body' >
                            <Card.Title 
                                className='search_result_card_title' >
                                {exercise.name}
                                </Card.Title>
                            <Card.Subtitle 
                                className='search_result_card_sub_title'>
                                Type: 
                                {exercise.type}
                            </Card.Subtitle>
                            <Card.Subtitle 
                                className='search_result_card_sub_title'>
                                Muscle: 
                                {exercise.muscle}
                            </Card.Subtitle>
                            <Card.Subtitle 
                                className='search_result_card_sub_title'>
                                Equipment: 
                                {exercise.equipment}
                            </Card.Subtitle>
                            <Card.Subtitle 
                                className='search_result_card_sub_title'>
                                Difficulty: 
                                {exercise.difficulty}
                            </Card.Subtitle> 
                            <div className='exercise_result_card_instruction_btn' >
                                <Button className='w-100' variant="secondary" onClick={ () => handleShow(index)}>Instructions</Button>
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
        </div>
    )
}

export default ExerciseInfoCard