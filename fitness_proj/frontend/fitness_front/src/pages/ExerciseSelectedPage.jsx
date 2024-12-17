import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ExerciseSelectedPage = () => {
    const { workoutSelected, exerciseSelected, setExerciseSelected } = useOutletContext();
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const cardsPerPage = 3;
    let displayedExercises = []

    if(workoutSelected){
        displayedExercises = workoutSelected.exercises.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);
    } 

    const nextPage = () => {
        if ((currentPage + 1) * cardsPerPage < workoutSelected.exercises.length) {
        setCurrentPage(prev => prev + 1);
        }
    };

    
    const prevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(prev => prev - 1);
        }
    };

    console.log(exerciseSelected)
    
    return(
        
        <>
            <div style={{display: "flex", alignItems: "center"}} >
                {workoutSelected ? displayedExercises.map((exercise, index) => (
                    <div key={index} >
                        <Card  style={{ width: '18rem', height: '400px', margin: '10px' }}>
                            <Card.Body className="d-flex flex-column" >
                                <Card.Title className="display-7" >{exercise.exercise_name}</Card.Title>
                                <div className="mt-auto">
                                <Button onClick={() => {{
                                    setExerciseSelected(exercise);
                                    navigate('/chart_display/')
                                    }}} variant="primary" className="w-100">Select</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )):null}
            </div>
      {workoutSelected ? 
      <>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button style={{marginRight: '10px'}} variant="secondary" onClick={prevPage} disabled={currentPage === 0}>              ← Previous
          </Button>
          <Button style={{marginLeft: '10px'}} variant="secondary" onClick={nextPage} disabled={(currentPage + 1) * cardsPerPage >= workoutSelected.length}>
            Next →
          </Button>
        </div>
      </>: null}
    </>    
    )
}

export default ExerciseSelectedPage