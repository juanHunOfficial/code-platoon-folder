import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState, useRef } from 'react'
import { createTracker } from '../utilities';
import { useOutletContext } from 'react-router-dom';
import NewWorkoutModalForm from '../components/NewWorkoutModalForm';
import NewExerciseModalForm from '../components/NewExerciseModalForm';

const WorkoutStatsPage = () => {
    const { user } = useOutletContext();
    const inputRef = useRef(null);
    const [trackerName, setTrackerName] = useState("");
    const [workoutName, setWorkoutName] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async(e) =>{
        e.preventDefault()
        
        let formData = {
            'trackerName' : trackerName,
            'userId': user.id
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
        <>
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

            <NewWorkoutModalForm trackerName={trackerName} setTrackerName={setTrackerName} workoutName={workoutName} setWorkoutName={setWorkoutName} />
            <NewExerciseModalForm workoutName={workoutName} setWorkoutName={setWorkoutName} />
            {/* <h1>
                
                Now we can start looking into charts js, start with being able to
                add workouts to the db and fetch them along with the desired data
                that we will be utilizing for rendering the charts.

                load 1 sample line chart to plot our desire points

                create a form with the desired data to pass for the creation of new entries like workouts
                and exercises.

                create a utilities function that will create the post request as well as one that will be
                the get request

                
            </h1> */}
        </>
    )
}

export default WorkoutStatsPage