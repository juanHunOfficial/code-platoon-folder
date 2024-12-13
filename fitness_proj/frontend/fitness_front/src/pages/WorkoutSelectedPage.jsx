import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const WorkoutSelectedPage = () => {
    const { workoutSelected, setWorkoutSelected, trackerSelected, setTrackerSelected } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const cardsPerPage = 3;
    let displayedTrackers = []

    if(trackerSelected){
        displayedTrackers = trackerSelected.workouts.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);
    } 

    const nextPage = () => {
        if ((currentPage + 1) * cardsPerPage < trackerSelected.workouts.length) {
        setCurrentPage(prev => prev + 1);
        }
    };

    
    const prevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(prev => prev - 1);
        }
    };
    
    return(
        
        <>
            <div style={{display: "flex", alignItems: "center"}} >
                {trackerSelected ? displayedTrackers.map((workout, index) => (
                    <div key={index} >
                        <Card  style={{ width: '18rem', height: '400px', margin: '10px' }}>
                            <Card.Body className="d-flex flex-column" >
                                <Card.Title className="display-7" >{workout.workout_name}</Card.Title>
                                <Card.Text className="text-truncate" style={{ maxHeight: '280px', overflow: 'hidden', fontWeight: "800"}}>
                                Workout Type: {workout.workout_type} <br/>  <br/>
                                Exercises: <br/>
                                {workout.exercises.map((exercise, index) => (
                                    <li key={index}>
                                        {exercise.exercise_name}
                                    </li>
                                ))}
                                </Card.Text>
                                <div className="mt-auto">
                                <Button onClick={() => {{
                                    setWorkoutSelected(workout);
                                    }}} variant="primary" className="w-100">Select</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )):null}
            </div>
      {trackerSelected ? 
      <>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button style={{marginRight: '10px'}} variant="secondary" onClick={prevPage} disabled={currentPage === 0}>              ← Previous
          </Button>
          <Button style={{marginLeft: '10px'}} variant="secondary" onClick={nextPage} disabled={(currentPage + 1) * cardsPerPage >= trackerSelected.length}>
            Next →
          </Button>
        </div>
      </>: null}
    </>    
    )
}

export default WorkoutSelectedPage