import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TrackerDashboardCard() {
  const { userTrackers, trackerSelected, setTrackerSelected } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
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

  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <>
    <div style={{display: "flex", alignItems: "center"}} >
    {userTrackers ? displayedTrackers.map((tracker, index) => (
      
        <div key={index} >
          <Card  style={{ width: '18rem', height: '400px', margin: '10px' }}>
            <Card.Body className="d-flex flex-column" >
                <Card.Title className="display-7" >{tracker.tracker_name}</Card.Title>
                <Card.Text className="text-truncate" style={{ maxHeight: '280px', overflow: 'hidden', fontWeight: "800"}}>
                  Workouts:
                  <br/>
                  {tracker.workouts.map((workout, index) => (
                    <li key={index}>
                      Name: {workout.workout_name}
                      Type: {workout.workout_type}
                    </li>
                  ))}
                </Card.Text>
                <div className="mt-auto">
                  <Button onClick={() => {{
                    setTrackerSelected(tracker);
                    navigate("/workout/")
                    }}} variant="primary" className="w-100">Select</Button>
                </div>
            </Card.Body>
          </Card>
        </div>
    
      )):null}
      </div>
      {userTrackers ? 
      <>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button style={{marginRight: '10px'}} variant="secondary" onClick={prevPage} disabled={currentPage === 0}>              ← Previous
          </Button>
          <Button style={{marginLeft: '10px'}} variant="secondary" onClick={nextPage} disabled={(currentPage + 1) * cardsPerPage >= userTrackers.length}>
            Next →
          </Button>
        </div>
      </>: null}
    </>
  );
}

export default TrackerDashboardCard;