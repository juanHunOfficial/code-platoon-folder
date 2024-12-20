import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { deleteWorkout, getSingleTracker } from '../utilities';
import NewWorkoutModalForm from '../components/NewWorkoutModalForm'
import UpdateWorkoutModal from '../components/UpdateWorkoutModal';

const WorkoutSelectedPage = () => {
    const { workoutSelected, setWorkoutSelected, trackerSelected, setTrackerSelected } = useOutletContext();
    const [currentSetDisplayed, setCurrentSetDisplayed] = useState(0);
    const [showModal, setShowModal] = useState(false); 
    const navigate = useNavigate();
    const MAX_DISPLAYED_PER_PAGE = 3;
    let displayedWorkouts = []

    if(trackerSelected){
        displayedWorkouts = trackerSelected.workouts.slice(currentSetDisplayed * MAX_DISPLAYED_PER_PAGE, (currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE);
    } 

    const nextPage = () => {
        if ((currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE < trackerSelected.workouts.length) {
        setCurrentSetDisplayed(prev => prev + 1);
        }
    };

    
    const prevPage = () => {
        if (currentSetDisplayed > 0) {
        setCurrentSetDisplayed(prev => prev - 1);
        }
    };

    const handleDeletionClick = async(workoutId) => {
        console.log(workoutId)
        if(workoutId){
            await deleteWorkout(workoutId)
            const updatedTracker = await getSingleTracker(trackerSelected.id);
            setTrackerSelected(updatedTracker)
        } 
    };

    const openUpdateModal = (workout) => {
        setWorkoutSelected(workout);  
        setShowModal(true); 
    };

    const closeUpdateModal = () => {
        setShowModal(false); 
    };
    
    return(
        
        <div className='page_div tracker_pages'>
            <div className='workout_selected_div' >
                {trackerSelected ? displayedWorkouts.map((workout, index) => (
                    <div key={index} >
                        <Card className='workout_card' >
                            <Card.Body className="d-flex flex-column" >
                                <Card.Title className="display-7" >{workout.workout_name}</Card.Title>
                                <Card.Text className="workout_card_text text-truncate" >
                                    Workout Type: {workout.type_of_workout} <br/>
                                    Weekly Frequency: {workout.weekly_frequency} <br/> <br/>
                                    Exercises: <br/>
                                    {workout.exercises.map((exercise, index) => (
                                        <li key={index}>
                                            {exercise.exercise_name}
                                        </li>
                                    ))}
                                </Card.Text>
                                <div className="mt-auto">
                                    <Button 
                                        className="w-100 react_btns"
                                        onClick={() => {{
                                            setWorkoutSelected(workout);
                                            navigate('/selected_exercise/')
                                        }}} 
                                        variant="secondary">
                                        Select
                                    </Button>                       
                                    <Button  
                                        className="w-100 react_btns btn_spacer_top_20"
                                        variant="secondary" 
                                        onClick={() => openUpdateModal(workout)}>
                                        Update
                                    </Button>
                                    <Button 
                                        className="w-100 react_btns btn_spacer_top_20"
                                        onClick={() => {{
                                            handleDeletionClick(workout.id)
                                        }}} 
                                        variant="secondary">
                                        Delete
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )):null}
            </div>
      {trackerSelected ? 
      <>
        <div className='prev_and_next_btns_div' >
          <Button 
            className='react_btns btn_spacer_right_10' 
            variant="secondary" 
            onClick={prevPage} 
            disabled={currentSetDisplayed === 0}>
            ← Previous
          </Button>
          <Button 
            className='react_btns btn_spacer_left_10' 
            variant="secondary" 
            onClick={nextPage} 
            disabled={(currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE >= trackerSelected.length}>
            Next →
          </Button>
        </div>
      </>: null}
      <div className='create_entry_button_div' >
        <NewWorkoutModalForm 
            trackerSelected={trackerSelected}
            setTrackerSelected={setTrackerSelected}
        />
        <UpdateWorkoutModal 
            show={showModal}
            onHide={closeUpdateModal}
            workoutSelected={workoutSelected}
            setWorkoutSelected={setWorkoutSelected}
            trackerSelected={trackerSelected}
            setTrackerSelected={setTrackerSelected}
        />
      </div>
    </div>    
    )
}

export default WorkoutSelectedPage