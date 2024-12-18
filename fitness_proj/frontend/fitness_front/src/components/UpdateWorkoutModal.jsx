import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateWorkout, getSingleTracker } from '../utilities';

function UpdateWorkoutModal({ show, onHide, workoutSelected, setWorkoutSelected, trackerSelected, setTrackerSelected }) {
    const inputRef = useRef(null);
    const [typeOfWorkout, setTypeOfWorkout] = useState(workoutSelected?.type_of_workout || "");
    const [weeklyFrequency, setWeeklyFrequency] = useState(workoutSelected?.weekly_frequency || "");
    const [workoutName, setWorkoutName] = useState(workoutSelected?.workout_name || "");

    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            'typeOfWorkout': typeOfWorkout,
            'weeklyFrequency': weeklyFrequency,
            'workoutName' : workoutName,
            'workoutId': workoutSelected.id
        }
        const results = await updateWorkout(formData)
        if(results){
            inputRef.current.value = ''
            setWorkoutSelected(results)
            const updatedTracker = await getSingleTracker(trackerSelected.id);
            setTrackerSelected(updatedTracker)
            onHide(); 
        }
        else{
            console.log('something went wrong in the return statement')
        }
    }


    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Workout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                        <Form.Label>Workout Name</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setWorkoutName(e.target.value)}
                            type="text"
                            placeholder="Enter the new name of your workout"
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
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) =>{ onHide(); 
                                                                handleSubmit(e); 
                                                                }} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateWorkoutModal;