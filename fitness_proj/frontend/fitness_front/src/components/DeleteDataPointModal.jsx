import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { deleteDataPoint, getSingleExercise } from '../utilities';

function DeleteDataPointModal({ exerciseSelected, setExerciseSelected }) {
    const inputRef = useRef(null);
    const [show, setShow] = useState(false);
    const [dataPointId, setDataPointId] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const results = await deleteDataPoint(dataPointId)
        inputRef.current.value = ''
        const refreshedExercise = await getSingleExercise(exerciseSelected.id)
        setExerciseSelected(refreshedExercise)
    }
    return (
        <>
            <Button 
                className="w-100 react_btns" 
                variant="secondary"  
                onClick={handleShow}>
                Delete A Data Point
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete A Data Point</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                        <Form.Label>Data Point Number</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setDataPointId(exerciseSelected.charts[parseInt(e.target.value) -1].id)}
                            type="text"
                            placeholder="Enter the number of the workout you want you want to delete"
                            autoFocus
                        />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={(e) =>{  
                            handleSubmit(e);
                            handleClose()
                        }} >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteDataPointModal;