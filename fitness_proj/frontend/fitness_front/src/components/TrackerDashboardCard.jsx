import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UpdateTrackerModal from './UpdateTrackerModal.jsx'
import { deleteTracker, getTrackers } from '../utilities'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles.css'

function TrackerDashboardCard() {
  const { userTrackers, setUserTrackers, trackerSelected, setTrackerSelected } = useOutletContext();
  const [currentSetDisplayed, setCurrentSetDisplayed] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();
  const MAX_DISPLAYED_PER_PAGE = 3;
  let displayedTrackers = []
  
  if(userTrackers){
    displayedTrackers = userTrackers.slice(currentSetDisplayed * MAX_DISPLAYED_PER_PAGE, (currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE);
  } 

  const nextPage = () => {
    if ((currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE < userTrackers.length) {
      setCurrentSetDisplayed(prev => prev + 1);
    }
  };

  
  const prevPage = () => {
    if (currentSetDisplayed > 0) {
      setCurrentSetDisplayed(prev => prev - 1);
    }
  };

  const openUpdateModal = (tracker) => {
    setTrackerSelected(tracker);  
    setShowModal(true); 
  };

  const closeUpdateModal = () => {
    setShowModal(false); 
  };

  const handleDeletionClick = async(trackerId) => {
        await deleteTracker(trackerId)
        const updatedTrackers = await getTrackers();
        setUserTrackers(updatedTrackers)
  };

  return (
    <>
    <div className='dashboard_card_div' >
    {userTrackers ? displayedTrackers.map((tracker, index) => (
        <div key={index} >
          <Card className='tracker_card'>
            <Card.Body className="d-flex flex-column" >
                <Card.Title className="display-7" > { tracker.tracker_name } </Card.Title>
                <Card.Text className="text-truncate tracker_card_text" >
                  Workouts:<br/>
                  {tracker.workouts.map((workout, index) => (
                    <li key={index}>
                      Name: {workout.workout_name}
                    </li>
                  ))}
                </Card.Text>
                <div className="mt-auto">
                  <Button 
                    onClick={() => {{
                    setTrackerSelected(tracker);
                    navigate("/workout/")
                    }}} 
                    variant="secondary" 
                    className="w-100 react_btns">
                      Select
                  </Button>
                  
                  <Button 
                    style={{marginTop: "20px"}} 
                    onClick={() => openUpdateModal(tracker)}   
                    variant="secondary" 
                    className="w-100 react_btns">Update</Button>

                  <Button 
                    style={{marginTop:"20px"}} 
                    onClick={() => handleDeletionClick(tracker.id)} variant="secondary" 
                    className="w-100 react_btns">Delete</Button>
                </div>
            </Card.Body>
          </Card>
        </div>
    
      )):null}
      </div>
      {userTrackers ? 
      <>
        <div className='prev_and_next_btns_div' >
          <Button 
            className='prev_btn react_btns'
            variant="secondary" onClick={prevPage} 
            disabled={currentSetDisplayed === 0}>              
            ← Previous
          </Button>
          <Button 
            className='next_btn  react_btns'
            variant="secondary" 
            onClick={nextPage} 
            disabled={(currentSetDisplayed + 1) * MAX_DISPLAYED_PER_PAGE >= userTrackers.length}>
            Next →
          </Button>
        </div>
      </>: null}
    
      <UpdateTrackerModal 
        show={showModal}
        onHide={closeUpdateModal}
        trackerSelected={trackerSelected}
        setTrackerSelected={setTrackerSelected}
        setUserTrackers={setUserTrackers}
      />
    </>
  );
}



export default TrackerDashboardCard;