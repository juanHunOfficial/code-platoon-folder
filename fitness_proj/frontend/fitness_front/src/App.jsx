import { Outlet, useLoaderData } from 'react-router-dom'
import NavBar from './components/NavBar'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState(useLoaderData());
  const [needsToSignup, setNeedsToSignup] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [userTrackers, setUserTrackers] = useState(null);
  const [workoutSelected, setWorkoutSelected] = useState("");
  const [trackerSelected, setTrackerSelected] = useState("");
  const [exerciseSelected, setExerciseSelected] = useState("")
  
  return (
    <>
      <h1>Welcome {user ? user.firstname : null}</h1>
      <NavBar 
        user={user} 
        setUser={setUser} 
        needsToSignup={needsToSignup} 
        setNeedsToSignup={setNeedsToSignup} 
        setUserTrackers={setUserTrackers}
      />
      <Outlet context={{user, 
                        setUser, 
                        needsToSignup, 
                        setNeedsToSignup, 
                        searchResults, 
                        setSearchResults,
                        userTrackers,
                        setUserTrackers,
                        workoutSelected,
                        setWorkoutSelected,
                        trackerSelected,
                        setTrackerSelected,
                        exerciseSelected,
                        setExerciseSelected
                      }}/>
    </>
  )
}

export default App
