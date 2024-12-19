import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { createTracker, getInfo } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import { useState, useRef } from 'react'

const TrackerCreationForm = ({trackerName, setTrackerName}) => {
    const { user, setUser, setUserTrackers } = useOutletContext();
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
            const refreshedUser = await getInfo()
            setUser(refreshedUser)
            setUserTrackers(refreshedUser.trackers)
        }
        else{
            console.log('something went wrong in the return statement')
        }
        
        
    }
    return(
        <div className='search_result_card_div' >
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        className='tracker_creation_form_ctrl'
                        ref={inputRef} 
                        onChange={(e)=> setTrackerName(e.target.value)}
                        type="text" 
                        placeholder="Enter the name of your new tracker" 
                    />
                </Form.Group>
                <div className='tracker_add_and_info_div' >
                    <div className='search_and_info_button' >
                        <Button 
                            className='react_btns tracker_add_and_info_btn' 
                            variant="secondary" 
                            type="submit">
                            Add
                        </Button>
                        <Button 
                            className='react_btns tracker_add_and_info_btn' 
                            variant="secondary" 
                            type="submit" 
                            onClick={handleShow}>
                            Info
                        </Button>
                    </div>
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