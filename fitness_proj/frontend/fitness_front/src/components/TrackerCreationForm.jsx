import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createTracker } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import { useState, useRef } from 'react'

const TrackerCreationForm = ({trackerName, setTrackerName}) => {
    const { user } = useOutletContext();
    const inputRef = useRef(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault()
        let formData = {
            'trackerName' : trackerName,
            'userId': user.id,
            'user':user.id
        }
        const results = await createTracker(formData)
        if(results){
            inputRef.current.value = ''
            setTrackerName(results)
        }
        else{
            console.log('something went wrong in the return statement')
        }
        
        
    }
    return(
        <div className='search_result_card' style={{display: 'flex', margin: '100px auto', justifyContent: 'center'}}>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    ref={inputRef} 
                    onChange={(e)=> setTrackerName(e.target.value)}
                    type="text" placeholder="Enter the name of your new tracker" style={{width: '450px'}}/>
                </Form.Group>
                <div className='search_and_info_button' style={{display: 'flex'}}>
                    <Button style={{marginRight: '20px', width: '100px'}} variant="primary" type="submit">Add</Button>
                    <Button style={{width: '100px'}} variant="primary" type="submit" onClick={handleShow}>Info</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Naming Conventions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Enter the tracker name in title format like the following: <br/>  
                        Cardio Fitness, Strength Routine, and Body Building Regiment 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>                    
            </Form>
        </div>
    )
}

export default TrackerCreationForm