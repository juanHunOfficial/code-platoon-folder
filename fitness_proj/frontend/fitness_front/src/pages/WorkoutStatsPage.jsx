import { useState } from 'react'
import NewWorkoutModalForm from '../components/NewWorkoutModalForm';
import NewExerciseModalForm from '../components/NewExerciseModalForm';
import TrackerCreationForm from '../components/TrackerCreationForm';

const WorkoutStatsPage = () => {
    
    const [trackerName, setTrackerName] = useState("");
    const [workoutName, setWorkoutName] = useState("");

    return(
        <>
            <TrackerCreationForm trackerName={trackerName} setTrackerName={setTrackerName} />
            <NewWorkoutModalForm trackerName={trackerName} setTrackerName={setTrackerName} workoutName={workoutName} setWorkoutName={setWorkoutName} />
            <NewExerciseModalForm workoutName={workoutName} setWorkoutName={setWorkoutName} />
        </>
    )
}

export default WorkoutStatsPage