import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createWorkout } from '../utilities';

function NewWorkoutModalForm({ workoutName, setWorkoutName, trackerName, setTrackerName }) {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const [typeOfWorkout, setTypeOfWorkout] = useState("");
    const [weeklyFrequency, setWeeklyFrequency] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            'typeOfWorkout': typeOfWorkout,
            'weeklyFrequency': weeklyFrequency,
            'workoutName' : workoutName,
            'trackerId' : trackerName.trackerId,
        }
        const results = await createWorkout(formData)
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
                Create a new workout
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Workout Creation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                        <Form.Label>Workout Name</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setWorkoutName(e.target.value)}
                            type="text"
                            placeholder="Enter the name of your workout"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Weekly Frequency</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setWeeklyFrequency(e.target.value)}
                                type='text' placeholder='Enter a number'/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Type of Workout</Form.Label>
                            <Form.Control 
                                ref={inputRef}
                                onChange={(e)=> setTypeOfWorkout(e.target.value)}
                                type='text' placeholder='Enter the type of workout this will be'/>
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

export default NewWorkoutModalForm;