import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';

const ExerciseInfoCard = () => {
    const { searchResults } = useOutletContext()

    return(
        <>
            <div className='search_result_card' style={{padding: '20px', display: 'flex', flexWrap:'wrap', 
                                                        margin: '100px auto',  gap: '20px', overflow: 'auto', 
                                                        justifyContent:'center'}}>
            {searchResults && Array.isArray(searchResults['exercises']) && searchResults['exercises'].length > 0 ? (
                searchResults['exercises'].map((exercise, index) =>(                    
                    <Card bg='primary' text='white' style={{ width: '18rem' }}>
                        <Card.Body  >
                            <Card.Title style={{marginBottom: '10px'}} >{exercise.name}</Card.Title>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Type: {exercise.type}</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Muscle: {exercise.muscle}</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Equipment: {exercise.equipment}</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '10px'}} >Difficulty: {exercise.difficulty}</Card.Subtitle>
                                <Card.Subtitle style={{marginBottom: '5px'}} >Instructions:</Card.Subtitle>
                                <Card.Text>
                                    {exercise.instructions}
                                </Card.Text>
                            <Button variant="light">Add???</Button>
                        </Card.Body>
                    </Card>
                ))
            ) : 
                null
            }
            </div>
        </>
    )
}

export default ExerciseInfoCard