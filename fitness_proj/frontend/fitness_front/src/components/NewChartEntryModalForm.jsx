import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createChartEntry, getSingleExercise } from '../utilities';

function NewChartEntryModalForm({ exerciseSelected, setExerciseSelected }) {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const [weight, setWeight] = useState("");
    const [goalNumOfReps, setGoalNumOfReps] = useState("");
    const [goalNumOfSets, setGoalNumOfSets] = useState("");
    const [actualNumOfReps, setActualNumOfReps] = useState("");
    const [actualNumOfSets, setActualNumOfSets] = useState("");
    const [iteration, setIteration] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            "iteration" : iteration,
            "actualNumOfReps": actualNumOfReps,
            "actualNumOfSets": actualNumOfSets,
            "goalNumOfReps": goalNumOfReps,
            "goalNumOfSets": goalNumOfSets,
            "weight": weight,
            "exerciseId": exerciseSelected.id
        }
        const results = await createChartEntry(formData)
        if(results){
            inputRef.current.value = ''
            const refreshedExercise = await getSingleExercise(exerciseSelected.id)
            setExerciseSelected(refreshedExercise)
        }
        else{
            console.log('something went wrong in the return statement')
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create a new exercise entry
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Exercise Creation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                        <Form.Label>Workout Number</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setIteration(e.target.value)}
                            type="text"
                            placeholder="Workout number must be unique"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Goal Rep Count</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setGoalNumOfReps(e.target.value)}
                                type='text' placeholder='Enter the goal amount for your rep count'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Goal Set Count</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setGoalNumOfSets(e.target.value)}
                                type='text' placeholder='Enter the goal amount for your set count'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Actual Rep Count</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setActualNumOfReps(e.target.value)}
                                type='text' placeholder='Enter the actual number of reps you accomplished'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Actual Set Count</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setActualNumOfSets(e.target.value)}
                                type='text' placeholder='Enter the actual number sets you accomplished'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setWeight(e.target.value)}
                                type='text' placeholder='Enter the weight you did on this set'/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) =>{ handleClose(); 
                                                               handleSubmit(e); 
                                                             }} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewChartEntryModalForm;