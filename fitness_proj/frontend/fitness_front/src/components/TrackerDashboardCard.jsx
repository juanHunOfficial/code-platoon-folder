import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';

function TrackerDashboardCard() {
  const { userTrackers } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  let displayedTrackers = []
  if(userTrackers){
    displayedTrackers = userTrackers.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);
  }
  

  const nextPage = () => {
    if ((currentPage + 1) * cardsPerPage < userTrackers.length) {
      setCurrentPage(prev => prev + 1);
    }
  };
  if(userTrackers){
    console.log(userTrackers)
  }
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <>
    <div style={{display: "flex", alignItems: "center"}} >
    {userTrackers ? displayedTrackers.map((tracker, index) => (
      <>
        <div>
          <Card key={index} style={{ width: '18rem', height: '400px', margin: '10px' }}>
            <Card.Body>
                <Card.Title className="display-7" >{tracker.tracker_name}</Card.Title>
                <Card.Text>
                  <h6 style={{fontWeight: "800"}}>Workouts:</h6> <br/>
                  {tracker.workouts.map((workout, index) => (
                    <>
                      <p >Name: {workout.workout_name}</p>
                      <p>Type: {workout.workout_type}</p>
                    </>
                  ))}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </>
      )):null}
      </div>
      {userTrackers ? 
      <>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="secondary" onClick={prevPage} disabled={currentPage === 0}>              ← Previous
          </Button>
          <Button variant="secondary" onClick={nextPage} disabled={(currentPage + 1) * cardsPerPage >= userTrackers.length}>
            Next →
          </Button>
        </div>
      </>: null}
    </>
  );
}

export default TrackerDashboardCard;