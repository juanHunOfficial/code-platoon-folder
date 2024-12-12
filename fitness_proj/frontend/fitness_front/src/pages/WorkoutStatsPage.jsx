import { useState } from 'react'
import NewWorkoutModalForm from '../components/NewWorkoutModalForm';
import NewExerciseModalForm from '../components/NewExerciseModalForm';
import TrackerCreationForm from '../components/TrackerCreationForm';
import { getTrackers } from '../utilities';
import { data } from 'react-router-dom';

const WorkoutStatsPage = () => {
    
    const [trackerName, setTrackerName] = useState("");
    const [workoutName, setWorkoutName] = useState("");

    const handleClick = async() => {
        let data = await getTrackers()
        console.log(data)
    }

    return(
        <>
            <button onClick={handleClick} >Tester</button>
            <TrackerCreationForm trackerName={trackerName} setTrackerName={setTrackerName} />
            <NewWorkoutModalForm trackerName={trackerName} setTrackerName={setTrackerName} workoutName={workoutName} setWorkoutName={setWorkoutName} />
            <NewExerciseModalForm workoutName={workoutName} setWorkoutName={setWorkoutName} />
        </>
    )
}

export default WorkoutStatsPage