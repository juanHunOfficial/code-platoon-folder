import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TrackerDashboardCard from '../components/TrackerDashboardCard'
import Button from 'react-bootstrap/Button';
import nutritionStockPic from '../assets/nutrition_pic.jpeg'
import exerciseStockPic from '../assets/exercise_pic.jpg'
import { getTrackers } from '../utilities'

const HomePage = () => {
    const { user, setUserTrackers } = useOutletContext();
    const navigate =  useNavigate();

    useEffect(() => {
        if(!user){
            navigate('signup/');
        }
    }, [user, navigate])

    useEffect(() => {
        if (user) {
            const fetchTracker = async () => {
                const trackers = await getTrackers();
                setUserTrackers(trackers);
            };
            fetchTracker();
        }
    }, []);

    return (
        <>
            {/* class names have been added so you can transfer all the inline styling into a css file later */}
            <div className='dashboard_container' style={{background : 'grey', padding: '50px 0'}} >
                <div className='dashboard_title_container' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px auto' }}>
                    <h1>Dashboard</h1>
                    <h2>Your Workouts</h2>
                </div>
                <div className='workout_cards' style={{display : 'flex', justifyContent: "space-around"}} >
                    <TrackerDashboardCard />
                </div>
            </div>
            <div className='food_section_container' style={{background:'lightgreen' ,display: 'flex', justifyContent: "space-between", paddingTop: '30px', paddingBottom: "30px"}}>
                <img className='food_stock_img' style={{background: 'blue', height: '250px', width: '250px', marginLeft: '50px', marginRight: '25px', borderRadius: '6px'}} src={nutritionStockPic}/>
                <div className='food_section_text_container' style={{marginRight: '50px'}} >
                    <h3>Satisfy your craving without ruining your diet</h3>
                    <p>Choose from a large selection of nutritious meals to meet your individual fitness goals</p>
                    <Button as={ Link } to='/nutrition/' >Start Browsing</Button> 
                </div>
            </div>
            <div className='exercise_search_section_container' style={{background:'lightgrey', display: 'flex', justifyContent: "space-between",  paddingTop: '30px', paddingBottom: "30px"}} >
                <div className='food_section_text_container' style={{marginLeft: "50px"}} >
                    <h3>Satisfy your craving without ruining your diet</h3>
                    <p>Choose from a large selection of nutritious meals to meet your individual fitness goals</p>
                    <Button as={ Link } to='/exercise/'>Start Browsing</Button> 
                </div>
                <img className='food_stock_img' style={{background: 'blue', height: '250px', width: '250px', marginRight : "50px", marginLeft: '25px', borderRadius: '6px'}} src={exerciseStockPic}/>
            </div>
        </>
    )
}

export default HomePage;