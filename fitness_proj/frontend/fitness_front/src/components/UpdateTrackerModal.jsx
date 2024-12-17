import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateTracker } from '../utilities';

function UpdateTrackerModal({ show, onHide, trackerSelected, setTrackerSelected }) {
    const inputRef = useRef(null);
    const [trackerName, setTrackerName] = useState(trackerSelected?.tracker_name || "");

    const handleSubmit = async(e) =>{
        e.preventDefault() 
        let formData = {
            'trackerName' : trackerName,
            'trackerId': trackerSelected.id
        }
        console.log(formData)
        const results = await updateTracker(formData)
        if(results){
            inputRef.current.value = ''
            setTrackerSelected(results)
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
                    <Modal.Title>Edit Tracker</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                        <Form.Label>Tracker Name</Form.Label>
                        <Form.Control
                            ref={inputRef}
                            onChange={(e)=> setTrackerName(e.target.value)}
                            type="text"
                            placeholder="Enter the new name of your tracker"
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

export default UpdateTrackerModal;