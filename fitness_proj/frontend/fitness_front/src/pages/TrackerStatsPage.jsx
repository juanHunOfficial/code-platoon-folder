import { useState } from 'react'
import TrackerCreationForm from '../components/TrackerCreationForm';
import TrackerDashboardCard from '../components/TrackerDashboardCard';
import '../styles.css'

const TrackerStatsPage = () => {
    
    const [trackerName, setTrackerName] = useState("");

    return(
        <div className='page_div tracker_pages'>
            <TrackerDashboardCard />
            <TrackerCreationForm 
                trackerName={trackerName} 
                setTrackerName={setTrackerName} 
            />
        </div>
    )
}

export default TrackerStatsPage