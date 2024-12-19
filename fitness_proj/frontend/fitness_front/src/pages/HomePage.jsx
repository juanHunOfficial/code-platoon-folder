import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TrackerDashboardCard from '../components/TrackerDashboardCard'
import Button from 'react-bootstrap/Button';
import nutritionStockPic from '../assets/nutrition_pic.jpeg'
import exerciseStockPic from '../assets/exercise_pic.jpg'
import { getTrackers } from '../utilities'
import '../styles.css'

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
            <div className='dashboard_container' >
                <div className='dashboard_title_container' >
                    <h1 className='site_text' >Welcome {user ? user.firstname : null}</h1>
                    <h2 className='site_text' >Your Workouts</h2>
                </div>
                <div >
                    <TrackerDashboardCard />
                </div>
            </div>
            <div className='food_section_container'>
                <img className='food_stock_img' src={nutritionStockPic}/>
                <div className='food_section_text_container' >
                    <h3 className='site_text'  >Satisfy your craving without ruining your diet</h3>
                    <p className='site_text'  >Choose from a large selection of nutritious meals to meet your individual fitness goals</p>
                    <Button className='react-btns' variant='secondary' as={ Link } to='/nutrition/' >Start Browsing</Button> 
                </div>
            </div>
            <div className='exercise_search_section_container' >
                <div className='food_section_text_container' >
                    <h3 className='site_text'  >Satisfy your craving without ruining your diet</h3>
                    <p className='site_text'  >Choose from a large selection of nutritious meals to meet your individual fitness goals</p>
                    <Button className='react-btns' variant='secondary' as={ Link } to='/exercise/'>Start Browsing</Button> 
                </div>
                <img className='food_stock_img' src={exerciseStockPic}/>
            </div>
        </>
    )
}

export default HomePage;