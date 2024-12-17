import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateExercise } from '../utilities';

function UpdateExerciseModal({ show, onHide, exerciseSelected, setExerciseSelected }) {
    const inputRef = useRef(null);
    const [exerciseName, setExerciseName] = useState(exerciseSelected?.exercise_name || "");

    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            'exerciseName' : exerciseName,
            'exerciseId': exerciseSelected.id
        }
        const results = await updateExercise(formData)
        if(results){
            inputRef.current.value = ''
            setExerciseSelected(results)
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
                    <Modal.Title>Edit Exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                        <Form.Label>Exercise Name</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setExerciseName(e.target.value)}
                            type="text"
                            placeholder="Enter the new name of your exercise"
                            autoFocus
                        />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={onHide}>
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={(e) =>{ onHide(); 
                                         handleSubmit(e); 
                                        }} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateExerciseModal;