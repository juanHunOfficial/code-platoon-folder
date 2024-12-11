import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { getMuscle } from '../utilities';
import { useOutletContext } from 'react-router-dom';

const MuscleSearchBar = () => {
    const { searchResults, setSearchResults } = useOutletContext()
    const [muscle, setMuscle] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let finalMuscleVar = muscle
        
        if(finalMuscleVar === 'lower back'){
            finalMuscleVar= "lower_back"
        }
        else if(finalMuscleVar === 'middle back'){
            finalMuscleVar = "middle_back"
        }
        let formData = {
            'muscle' : finalMuscleVar
        }
        try{
            const results = await getMuscle(formData)
            if(results){
                setSearchResults(results)
            }
        }catch(error){
            console.error("Working as intended")
            setSearchResults([])
        }
        console.log(results)
        
    }
    
    return(
        <>
            <div className='search_result_card' style={{display: 'flex', margin: '100px auto', justifyContent: 'center'}}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                        value={muscle}
                        onChange={(e)=> setMuscle(e.target.value)}
                        type="text" placeholder="Enter a muscle" />
                        <Form.Text className="text-muted">
                            Enter a particular muscle group you with to target. (ex: biceps, chest, lower back)
                        </Form.Text>
                    </Form.Group>
                    <div className='search_and_info_button' style={{display: 'flex'}}>
                        <Button style={{marginRight: '20px', width: '100px'}} variant="primary" type="submit">Search</Button>
                        <Button style={{width: '100px'}} variant="primary" type="submit" onClick={handleShow}>Info</Button>
                    </div> 
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>What can I search?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The possible search items as as follows: <br/> abdominals, abductors, adductors, biceps, 
                            calves, chest, forearms, glutes, hamstrings, lats, lower back, middle back, nack, 
                            quadriceps, traps, and triceps 
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>                    
                </Form>
            </div>
        </>
    )
}

export default MuscleSearchBar