import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UpdateExerciseModal from '../components/UpdateExerciseModal';
import NewExerciseModalForm from '../components/NewExerciseModalForm';
import { deleteExercise, getSingleWorkout } from '../utilities';

const ExerciseSelectedPage = () => {
    const { workoutSelected, setWorkoutSelected, exerciseSelected, setExerciseSelected } = useOutletContext();
    const [currentSetDisplayed, setCurrentSetDisplayed] = useState(0);
    const [showModal, setShowModal] = useState(false); 
    const navigate = useNavigate();
    const MAX_DISPLAYED_PER_PAGE = 3;
    let displayedExercises = []

    if(workoutSelected){
        displayedExercises = workoutSelected.exercises.slice(currentSetDisplayed * MAX_DISPLAYED_PER_PAGE, (currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE);
    } 

    const nextPage = () => {
        if ((currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE < workoutSelected.exercises.length) {
        setCurrentSetDisplayed(prev => prev + 1);
        }
    };
    
    const prevPage = () => {
        if (currentSetDisplayed > 0) {
        setCurrentSetDisplayed(prev => prev - 1);
        }
    };

    const openUpdateModal = (exercise) => {
        setExerciseSelected(exercise);  
        setShowModal(true); 
    };
    
    const closeUpdateModal = async() => {
        setShowModal(false);
        const refreshedWorkout = await getSingleWorkout(workoutSelected.id)
        setWorkoutSelected(refreshedWorkout)
    };
    
    const handleDeletionClick = async(exerciseId) => {
        await deleteExercise(exerciseId)
        const refreshedWorkout = await getSingleWorkout(workoutSelected.id)
        setWorkoutSelected(refreshedWorkout)
    };
    
    return(
        
        <div className='page_div tracker_pages'>
            <div className='exercise_cards_div' >
              {workoutSelected ? displayedExercises.map((exercise, index) => (
                <div key={index} >
                  <Card className='exercise_card' >
                    <Card.Body className="d-flex flex-column" >
                      <Card.Title className="display-7" >{exercise.exercise_name}</Card.Title>
                      <div className="mt-auto">
                        <Button 
                          className="w-100 react_btns"
                          onClick={() => {{
                            setExerciseSelected(exercise);
                            navigate('/chart_display/')
                          }}} 
                          variant="secondary">
                          Select
                        </Button>
                        <Button 
                          className="w-100 react_btns btn_spacer_top_20"
                          onClick={() => openUpdateModal(exercise)}   
                          variant="secondary">
                          Update
                        </Button>
                        <Button 
                          className="w-100 react_btns btn_spacer_top_20"
                          onClick={() => {{
                            handleDeletionClick(exercise.id)
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
      {workoutSelected && workoutSelected['exercises'].length > 0 ? 
        <>
          <div className='prev_and_next_btns_div'>
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
              disabled={(currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE >= workoutSelected.length}>
              Next →
            </Button>
          </div>
        </>: null}
      <UpdateExerciseModal 
        show={showModal}
        onHide={closeUpdateModal}
        exerciseSelected={exerciseSelected}
        setExerciseSelected={setExerciseSelected}
      />
      <div className='create_entry_button_div'>
        <NewExerciseModalForm 
          workoutSelected={workoutSelected}
          setWorkoutSelected={setWorkoutSelected}
        />
      </div>
    </div>    
    )
}

export default ExerciseSelectedPage