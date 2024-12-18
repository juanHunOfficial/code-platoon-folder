import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createExercise, getSingleWorkout } from '../utilities';

function NewExerciseModalForm({ workoutSelected, setWorkoutSelected }) {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const [exerciseName, setExerciseName] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(workoutSelected)
    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            "exerciseName" : exerciseName,
            "workoutId": workoutSelected.id
        }
        const results = await createExercise(formData)
        if(results){
            inputRef.current.value = ''
            const refreshedWorkout = await getSingleWorkout(workoutSelected.id)
            setWorkoutSelected(refreshedWorkout)
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