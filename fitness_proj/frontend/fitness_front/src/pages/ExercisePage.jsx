import ExerciseInfoCard from "../components/ExerciseInfoCard"
import MuscleSearchBar from "../components/MuscleSearchBar"


const ExercisePage = () =>{
    
    return(
        <div className="page_div tracker_pages">
            <MuscleSearchBar />
            <ExerciseInfoCard />
        </div>
    )
}

export default ExercisePage