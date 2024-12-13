import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createExercise } from '../utilities';

function NewExerciseModalForm({ workoutName, setWorkoutName }) {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const [weight, setWeight] = useState("");
    const [goalNumOfReps, setGoalNumOfReps] = useState("");
    const [goalNumOfSets, setGoalNumOfSets] = useState("");
    const [actualNumOfReps, setActualNumOfReps] = useState("");
    const [actualNumOfSets, setActualNumOfSets] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [iteration, setIteration] = useState("");
    const [exerciseName, setExerciseName] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            "exerciseName" : exerciseName,
            "iteration" : iteration,
            "type": type,
            "actualNumOfReps": actualNumOfReps,
            "actualNumOfSets": actualNumOfSets,
            "goalNumOfReps": goalNumOfReps,
            "goalNumOfSets": goalNumOfSets,
            "weight": weight,
            "date": date,
            "workoutId": workoutName.workoutId
        }
        const results = await createExercise(formData)
        if(results){
            inputRef.current.value = ''
            setWorkoutName(results)
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
                        <Form.Label>Exercise Name</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setExerciseName(e.target.value)}
                            type="text"
                            placeholder="Enter the name of this exercise"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Iteration</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setIteration(e.target.value)}
                                type='text' placeholder='Enter which set your currently on'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type of Exercise</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setType(e.target.value)}
                                type='text' placeholder='Enter the type of exercise this will be'/>
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
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setDate(e.target.value)}
                                type='text' placeholder='Format YYYY-MM-DD'/>
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

export default NewExerciseModalForm;