import { useState } from 'react'
import TrackerCreationForm from '../components/TrackerCreationForm';
import TrackerDashboardCard from '../components/TrackerDashboardCard';

const TrackerStatsPage = () => {
    
    const [trackerName, setTrackerName] = useState("");

    return(
        <>
            <TrackerDashboardCard />
            <TrackerCreationForm 
                trackerName={trackerName} 
                setTrackerName={setTrackerName} 
            />
        </>
    )
}

export default TrackerStatsPage